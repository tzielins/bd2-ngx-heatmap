import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {Point} from '../../../../bd2-heatmap.dom';
import {ScaleBand, ScaleQuantize} from 'd3-scale';
import {TooltipService} from '../../../tooltip.service';
import {StateService} from '../../../state.service';

// (mouseout)="hideTooltip($event)" (mouseover)="showTooltip($event)"
@Component({
  selector: '[bd2-data-point-box]',
  template: `
    <svg:rect #box *ngIf="point && xScale" [attr.x]="xScale(point.x)" [attr.y]="yPosition"
          [attr.width]="xScale.bandwidth()-1"
          [attr.height]="yHeight" [attr.fill]="colorScale(point.y)" [attr.stroke]="colorScale(point.y)"
    >
    </svg:rect>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataPointBoxComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {

  @ViewChild('box')
  boxNode: ElementRef<SVGGraphicsElement>;

  prevBoxNode: ElementRef<SVGGraphicsElement>;

  @Input()
  point: Point;

  @Input()
  yPosition: number;

  @Input()
  yHeight: number;

  @Input()
  xScale: ScaleBand<any>;

  @Input()
  colorScale: ScaleQuantize<string>;

  @Input()
  label: string;

  @Input()
  lastPoint = false;


  constructor(private tooltip: TooltipService, private stateService: StateService, private zone: NgZone) {
  }

  ngAfterViewInit(): void {
    if (this.boxNode) {

      if ((this.prevBoxNode !== this.boxNode)) {
        this.removeMouseListeners(this.prevBoxNode);
        this.zone.runOutsideAngular(() => {
          this.addMouseListeners(this.boxNode);
        });
        this.prevBoxNode = this.boxNode;
      }
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    if (this.lastPoint) {
      this.stateService.finishedRendering();
    }
  }

  ngOnDestroy(): void {
    this.removeMouseListeners(this.boxNode);
  }

  addMouseListeners(elm: ElementRef<SVGGraphicsElement>) {
    if (elm) {
      elm.nativeElement.addEventListener('mouseover', this.showTooltip.bind(this));
      elm.nativeElement.addEventListener('mouseout', this.hideTooltip.bind(this));
    }
  }

  removeMouseListeners(elm: ElementRef<SVGGraphicsElement>) {
    if (elm) {
      elm.nativeElement.removeEventListener('mouseover', this.showTooltip);
      elm.nativeElement.removeEventListener('mouseout', this.hideTooltip);
    }
  }

  hideTooltip($event: any) {
    const location = {x: this.xScale(this.point.x), y: this.yPosition};
    this.tooltip.hideTooltip(this.point, location);
  }

  showTooltip($event: any) {
    const location = {x: this.xScale(this.point.x), y: this.yPosition};
    this.tooltip.showTooltip(this.label, this.point, location);
  }








}
