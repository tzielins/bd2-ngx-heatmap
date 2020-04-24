import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {BoxSerie, GraphicContext, LookAndFeelSizing, Serie} from '../../bd2-heatmap.dom';
import {TooltipService} from '../../bd2-ngx-heatmap/tooltip.service';
import {BD2ArbHeatmapUtil} from '../bd2-arb-heatmap-util';

@Component({
  selector: 'bd2-ng-arb-heatmap',
  templateUrl: './bd2-ng-arb-heatmap.component.html',
  styleUrls: ['./bd2-ng-arb-heatmap.component.css'],
  providers: [TooltipService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Bd2NgArbHeatmapComponent implements OnInit, OnDestroy, OnChanges {

  series: BoxSerie[];

  @Input()
  data: Serie[];

  @Input()
  asymmetric = false;

  @Input()
  hidden = false;

  @Input()
  labelsAlwaysOn = true;

  @Input()
  lookAndFeel = new LookAndFeelSizing();

  graphic: GraphicContext;

  heatmapUtil = new BD2ArbHeatmapUtil();

  constructor(private changeDetector: ChangeDetectorRef, private tooltip: TooltipService) {
  }


  ngOnInit(): void {
    // this.changeDetector.detach();
  }

  ngOnDestroy() {
    if (this.tooltip) {
      this.tooltip.ngOnDestroy();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      this.series = this.heatmapUtil.seriesToBoxes(this.data, this.asymmetric);
      this.graphic = this.heatmapUtil.prepareGraphicContext(this.series, this.lookAndFeel);
    } else {
      this.graphic = undefined;
    }
  }


}
