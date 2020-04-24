import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GraphicContext} from '../../bd2-heatmap.dom';

@Component({
  selector: '[bd2hm-axis-box]',
  templateUrl: './axis-box.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AxisBoxComponent implements OnInit, OnChanges {

  @Input()
  graphic: GraphicContext;

  xNumeric = false;
  xBand = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.graphic) {
      this.xNumeric = (this.graphic.xScale as any).bandwidth ? false : true;
      this.xBand = (this.graphic.xScale as any).bandwidth ? true : false;
    }
  }

}
