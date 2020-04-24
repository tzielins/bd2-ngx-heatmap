import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipComponent} from './tooltip/tooltip.component';
import {LabelsComponent} from './labels/labels.component';
import {LabelBoxComponent} from './labels/label-box/label-box.component';
import {SerieRowComponent} from './series-box/serie-row/serie-row.component';
import {DataPointBoxComponent} from './series-box/serie-row/data-point-box/data-point-box.component';
import {SeriesBoxComponent} from './series-box/series-box.component';
import {PaneBackComponent} from './pane-back/pane-back.component';
import {Bd2NgxHeatmapComponent} from './bd2-ngx-heatmap.component';
import {AxisModule} from '../axis/axis.module';
import {Bd2NgArbHeatmapComponent} from '../bd2-ng-arb-heatmap/bd2-ng-arb-heatmap/bd2-ng-arb-heatmap.component';


@NgModule({
  declarations: [
    LabelsComponent,
    LabelBoxComponent,
    TooltipComponent,
    PaneBackComponent,
    SeriesBoxComponent,
    SerieRowComponent,
    DataPointBoxComponent,
    Bd2NgxHeatmapComponent,
    Bd2NgArbHeatmapComponent
  ],
  imports: [
    CommonModule,
    AxisModule
  ],
  exports: [
    Bd2NgxHeatmapComponent,
    Bd2NgArbHeatmapComponent
  ]

})
export class Bd2NgxHeatmapModule { }
