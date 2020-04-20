import {Component, Input, OnInit} from '@angular/core';
import {GraphicContext, LookAndFeel, Serie} from '../bd2-heatmap.dom';
import {scaleBand, ScaleBand, scaleLinear, ScaleLinear} from 'd3-scale';
import {Bd2HeatmapUtil} from '../bd2-heatmap-util';
import {TooltipService} from './tooltip.service';


@Component({
  selector: 'bd2-ngx-heatmap',
  templateUrl: './bd2-ngx-heatmap.component.html',
  styleUrls: ['./bd2-ngx-heatmap.component.css'],
  providers: [TooltipService]
})
export class Bd2NgxHeatmapComponent implements OnInit {

  series: Serie[];

  @Input()
  set data(data: Serie[]) {
    this.series = data;
    console.log("S", this.series.length);

    this.graphic = this.heatmapUtil.prepareGraphicContext(this.series, this.lookAndFeel);
  }

  @Input()
  hidden = false;

  svgWidth = '100%';

  lookAndFeel: LookAndFeel = {
    vMargin: 25,
    hMargin: 20,

    smallRowWidth: 6,
    midRowWidth: 12,
    bigRowWidth: 25,

    rowGap: 0.05,

  };

  graphic: GraphicContext;

  heatmapUtil = new Bd2HeatmapUtil();

  constructor() { }

  trackByIndex(index: number, item: any) {
    return index;
  }

  ngOnInit(): void {
  }



}
