import {Component, Input, OnInit} from '@angular/core';
import {Point} from '../../../bd2-heatmap.dom';
import {ScaleBand, ScaleQuantize} from 'd3-scale';

@Component({
  selector: '[bd2-data-point-box]',
  template: `
    <svg:rect *ngIf="point && xScale" [attr.x]="xScale(point.x)" [attr.y]="yPosition"
          [attr.width]="xScale.bandwidth()-1"
          [attr.height]="yWidth" [attr.fill]="colorScale(point.y)" [attr.stroke]="colorScale(point.y)">
    </svg:rect>
  `,
  styles: [
  ]
})
export class DataPointBoxComponent implements OnInit {

  @Input()
  point: Point;

  @Input()
  yPosition: number;

  @Input()
  yWidth: number;

  @Input()
  xScale: ScaleBand<any>;

  @Input()
  colorScale: ScaleQuantize<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
