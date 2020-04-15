import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GraphicContext} from '../../bd2-heatmap.dom';

@Component({
  selector: '[bd2-axis-box]',
  templateUrl: './axis-box.component.html',
  styles: [
  ]
})
export class AxisBoxComponent implements OnInit, OnChanges {

  @Input()
  graphic: GraphicContext;



  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
