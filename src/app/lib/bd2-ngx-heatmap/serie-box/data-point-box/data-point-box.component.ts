import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Point} from '../../../bd2-heatmap.dom';
import {ScaleBand, ScaleQuantize} from 'd3-scale';
import {TooltipService} from '../../tooltip.service';

@Component({
  selector: '[bd2-data-point-box]',
  template: `
    <svg:rect *ngIf="point && xScale" [attr.x]="xScale(point.x)" [attr.y]="yPosition"
          [attr.width]="xScale.bandwidth()-1"
          [attr.height]="yHeight" [attr.fill]="colorScale(point.y)" [attr.stroke]="colorScale(point.y)"
          (mouseout)="hideTooltip($event)" (mouseover)="showTooltip($event)"
    >
    </svg:rect>
    <svg:text display="none">{{message()}}</svg:text>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataPointBoxComponent implements OnInit {

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

  msgI = 1;
  message() {
    //console.log('Box'+this.point?.x, this.msgI++);
    return 'Box';
  }

  constructor(private tooltip: TooltipService) {
    console.log("Box Created");
  }

  ngOnInit(): void {
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
