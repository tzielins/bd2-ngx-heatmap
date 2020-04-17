import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TooltipService} from '../tooltip.service';
import {Observable, Subscription, timer} from 'rxjs';
import {GraphicContext, Point} from '../../bd2-heatmap.dom';
import {debounceTime, map, tap} from 'rxjs/operators';


// [attr.display]="showBack ? undefined : 'none'"
// [style.visibility]="showBack ? undefined :'hidden'"

@Component({
  selector: '[bd2-tooltip]',
  template: `
    <svg:g *ngIf="graphic" class="tooltipBox" [attr.display]="show ? undefined : 'none'" [attr.transform]="position"
           style="font-size: 10;"
    >
      <svg:g [attr.opacity]="ready ? 1 : 0">
      <svg:rect [attr.x]="textBX" [attr.width]="textBWidth" [attr.y]="textBY" [attr.height]="textBHeight"
                fill="black" opacity="0.8"
      ></svg:rect>
      <svg:text #text fill="white">
        <tspan x="1em">{{label}}</tspan>
        <tspan x="1em" dy="1.2em">{{values}}</tspan>
      </svg:text>
      </svg:g>
    </svg:g>
  `,
  styles: [
  ]
})
export class TooltipComponent implements OnInit, OnDestroy {


  @Input()
  graphic: GraphicContext;

  @ViewChild('text')
  textNode: ElementRef<SVGGraphicsElement>;

  show = false;
  label: string;
  values: string;
  subscription: Subscription;
  position: string;

  ready = false;
  textBX: number;
  textBY: number;
  textBWidth: number;
  textBHeight: number;

  constructor(private tooltip: TooltipService) { }

  ngOnInit(): void {
    this.subscription = this.tooltip.request$.pipe(
        debounceTime(100)
      ).subscribe( request => this.handleRequest(request));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  handleRequest([show, label, point, location]: [boolean, string, Point, Point]) {
    if (show) {
      this.showTooltip(label, point, location);
    } else {
      this.hideTooltip(point, location);
    }
  }

  showTooltip(label: string, point: Point, location: Point) {

    this.ready = false;
    this.label = this.formatLabel(label);
    this.values = this.formatValues(point);

    this.show = true;


    this.updateTextBBox().subscribe(
      rect => {
        if (this.show) {
          this.position = this.translateToDataLocation(location, this.textBWidth, this.graphic.workspaceWidth);
          this.ready = true;
        }
      }
    );

  }

  translateToDataLocation(location: Point, textBoxWidth: number, workspaceWidth: number) {
    let x = location.x;
    if ((x + textBoxWidth) >= workspaceWidth) {
      x = location.x - textBoxWidth - 20;
    }
    const y = location.y;
    return `translate(${x}, ${y})`;
  }

  hideTooltip(point: Point, location: Point) {
    this.show = false;
  }

  formatValues(point: Point) {

    return `${this.graphic.domainFormatter(point.x)} : ${this.graphic.valuesFormatter(point.y)}`;
  }



  updateTextBBox(): Observable<SVGRect> {

    return timer(0).pipe(
      map( r => this.textBBox()),
      tap( rect => this.setTextBBox(rect))
    );
  }

  setTextBBox(rect: SVGRect) {
    this.textBX = rect.x - 4;
    this.textBY = rect.y - 4;
    this.textBHeight = rect.height + 8;
    this.textBWidth = rect.width + 8;
  }

  textBBox(): SVGRect {
    if (!this.textNode) {
      return {x: 0, y: 0, height: 0, width: 0} as SVGRect;
    }
    return this.textNode.nativeElement.getBBox();
  }

  formatLabel(label: string) {
    if (label.length < 40) {
      return label;
    }

    return label.substring(0, 38) + '...';
  }
}
