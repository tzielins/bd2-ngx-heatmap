import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ScaleLinear} from 'd3-scale';

//

@Component({
  selector: '[bd2-x-axis]',
  template: `
    <svg:g class="x-axis" >
      <svg:line x1="0" y1="0" y2="0" [attr.x2]="x2" [attr.transform]="axisTransform" stroke="grey"></svg:line>
    </svg:g>
  `,
  styles: [
  ]
})
export class XAxisComponent implements OnInit, OnChanges {

  @Input()
  xScale: ScaleLinear<number, number>;

  @Input()
  yPosition: number;

  @Input()
  top = false;

  axisTransform: string;
  x2: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log('y possition', this.yPosition);
    console.log('range', this.xScale?.range());
    this.axisTransform = `translate(0,${this.yPosition})`;
    this.x2 = this.xScale?.range()[1];
  }

}
