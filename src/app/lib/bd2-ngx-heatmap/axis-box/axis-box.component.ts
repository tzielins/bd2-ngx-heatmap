import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GraphicContext} from '../../bd2-heatmap.dom';

@Component({
  selector: '[bd2hm-axis-box]',
  templateUrl: './axis-box.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AxisBoxComponent implements OnInit, OnChanges {

  @Input()
  graphic: GraphicContext;


  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
