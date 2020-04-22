import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {GraphicContext, LookAndFeelSizing, Serie} from '../bd2-heatmap.dom';
import {Bd2HeatmapUtil} from '../bd2-heatmap-util';
import {TooltipService} from './tooltip.service';


@Component({
  selector: 'bd2-ng-heatmap',
  templateUrl: './bd2-ngx-heatmap.component.html',
  styleUrls: ['./bd2-ngx-heatmap.component.css'],
  providers: [TooltipService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Bd2NgxHeatmapComponent implements OnInit, OnDestroy, OnChanges {

  series: Serie[];

  @Input()
  set data(data: Serie[]) {
    this.series = data;
    this.graphic = this.heatmapUtil.prepareGraphicContext(this.series, this.lookAndFeel);
  }

  @Input()
  hidden = false;


  svgWidth = '100%';

  lookAndFeel = new LookAndFeelSizing();

  graphic: GraphicContext;

  heatmapUtil = new Bd2HeatmapUtil();

  constructor(private changeDetector: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    // this.changeDetector.detach();
  }

  ngOnDestroy() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.changeDetector.detectChanges();

  }


}
