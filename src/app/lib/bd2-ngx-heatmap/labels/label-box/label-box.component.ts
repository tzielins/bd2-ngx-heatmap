import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Serie} from '../../../bd2-heatmap.dom';
import {Observable, timer} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: '[bd2-label-box]',
  template: `
    <svg:g *ngIf="serie" class="label"  >
      <svg:text *ngIf="alwaysOn" x="5" [attr.y]="yMiddle"
                dominant-baseline="central" [attr.font-size]="fontSize()"
                [attr.opacity]="toggled ? 1 : 0.6" [attr.fill]="toggled ? 'white' : undefined"
      >{{serie.label}}</svg:text>
      <g (mouseout)="toggleLabel(false)" (mouseover)="toggleLabel(true)">
        <!--<svg:rect x="-7" width="7" [attr.y]="yPosition" [attr.height]="yHeight" fill="rgb(127, 127, 127)"
                  ></svg:rect>-->
        <svg:circle [attr.cx]="-cirR()-2" [attr.cy]="yMiddle" [attr.r]="cirR()" [attr.fill]="'rgb(67, 125, 179)'"
                    [attr.filter]="band < 7 ? undefined : 'url(#bd2-shadow)'"
        ></svg:circle>
        <svg:g [attr.opacity]="ready ? 1 : 0" [attr.display]="toggled ? undefined : 'none'" font-size="10">
          <svg:rect x="0" [attr.width]="textBWidth" [attr.y]="textBY" [attr.height]="textBHeight"
                    fill="black" opacity="0.8" filter="url(#bd2-shadow)"

          ></svg:rect>
          <svg:text #text x="5" [attr.y]="yMiddle"
                    dominant-baseline="central" fill="white"
          >{{serie.label}}</svg:text>
        </svg:g>
      </g>
    </svg:g>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelBoxComponent implements OnInit {

  @Input()
  serie: Serie;

  @Input()
  yPosition: number;

  @Input()
  yMiddle: number;

  @Input()
  yHeight: number;

  @Input()
  band: number;

  @Input()
  color: string;

  @Input()
  alwaysOn = true;

  @ViewChild('text')
  textNode: ElementRef<SVGGraphicsElement>;

  textBWidth = 0;
  textBY = 0;
  textBHeight;

  toggled = false;
  ready = false;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  fontSize() {
    if (this.yHeight > 10) {
      return 10;
    }
    if (this.yHeight >= 5) {
      return this.yHeight;
    }
    return 0;
  }

  toggleLabel(val?: boolean) {

    if (val === undefined) { val = !this.toggled; }

    this.ready = false;
    this.toggled = val;

    if (this.toggled) {
      this.updateTextBBox().subscribe(
        rect => {
          if (this.toggled) {
            this.ready = true;
          }
          this.changeDetector.markForCheck();
        }
      );
    }

  }

  updateTextBBox(): Observable<SVGRect> {

    return timer(0).pipe(
      map( r => this.textBBox()),
      tap( rect => this.setTextBBox(rect))
    );
  }

  setTextBBox(rect: SVGRect) {
    this.textBY = rect.y - 4;
    this.textBHeight = rect.height + 8;
    this.textBWidth = rect.x + rect.width + 4;
  }

  textBBox(): SVGRect {
    if (!this.textNode) {
      return {x: 0, y: 0, height: 0, width: 0} as SVGRect;
    }
    return this.textNode.nativeElement.getBBox();
  }

  cirR() {
    if (this.band >= 20) { return 9; }
    if (this.band <= 5 ) { return 2; }
    return this.band / 2 - 1;
  }

}
