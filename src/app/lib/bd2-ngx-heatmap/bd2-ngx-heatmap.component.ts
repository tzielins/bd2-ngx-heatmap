import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {GraphicContext, LookAndFeel, Serie} from '../bd2-heatmap.dom';
import {Bd2HeatmapUtil} from '../bd2-heatmap-util';
import {TooltipService} from './tooltip.service';
import {Observable, Subject, timer} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {StateService} from './state.service';


@Component({
  selector: 'bd2-ngx-heatmap',
  templateUrl: './bd2-ngx-heatmap.component.html',
  styleUrls: ['./bd2-ngx-heatmap.component.css'],
  providers: [TooltipService, StateService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Bd2NgxHeatmapComponent implements OnInit, OnDestroy, OnChanges {

  series: Serie[];

  @Input()
  set data(data: Serie[]) {
    this.stateService.startsRendering();
    timer(1).subscribe(() => {
      this.series = data;
      this.graphic = this.heatmapUtil.prepareGraphicContext(this.series, this.lookAndFeel);
      this.changeDetector.detectChanges();
    });
  }

  @Input()
  hidden = false;

  @Output()
  processing: Observable<boolean>;

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

  constructor(private changeDetector: ChangeDetectorRef, private stateService: StateService) {
    this.processing = this.stateService.render$;
  }


  ngOnInit(): void {
    // this.changeDetector.detach();
    this.stateService.render$.subscribe( r => console.log("Renders", r));
  }

  ngOnDestroy() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.changeDetector.detectChanges();

  }




}
