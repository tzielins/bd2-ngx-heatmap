import {Component, Input, OnInit} from '@angular/core';
import {GraphicContext} from '../../bd2-heatmap.dom';

@Component({
  selector: '[bd2-axis-box]',
  templateUrl: './axis-box.component.html',
  styles: [
  ]
})
export class AxisBoxComponent implements OnInit {

  @Input('bd2-axis-box')
  graphic: GraphicContext;

  constructor() { }

  ngOnInit(): void {
  }

}
