import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GraphicContext, LookAndFeel, Serie} from '../bd2-heatmap.dom';
import {scaleBand, ScaleBand, scaleLinear, ScaleLinear} from 'd3-scale';
import {Bd2HeatmapUtil} from '../bd2-heatmap-util';
import {TooltipService} from './tooltip.service';


@Component({
  selector: 'bd2-ngx-heatmap',
  templateUrl: './bd2-ngx-heatmap.component.html',
  styleUrls: ['./bd2-ngx-heatmap.component.css'],
  providers: [TooltipService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Bd2NgxHeatmapComponent implements OnInit, OnChanges {

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

  constructor(private changeDetector: ChangeDetectorRef) { }


  ngOnInit(): void {
    //this.changeDetector.detach();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //this.changeDetector.detectChanges();
  }



}
