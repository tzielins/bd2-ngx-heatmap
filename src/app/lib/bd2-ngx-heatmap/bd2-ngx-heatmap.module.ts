import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TooltipComponent} from './tooltip/tooltip.component';
import {LabelsComponent} from './labels/labels.component';
import {LabelBoxComponent} from './labels/label-box/label-box.component';
import {AxisBoxComponent} from './axis-box/axis-box.component';
import {XAxisComponent} from './axis-box/x-axis/x-axis.component';
import {YAxisComponent} from './axis-box/y-axis/y-axis.component';
import {VTickMarkComponent} from './axis-box/x-axis/v-tick-mark/v-tick-mark.component';
import {SerieRowComponent} from './series-box/serie-row/serie-row.component';
import {DataPointBoxComponent} from './series-box/serie-row/data-point-box/data-point-box.component';
import {SeriesBoxComponent} from './series-box/series-box.component';
import {PaneBackComponent} from './pane-back/pane-back.component';
import {Bd2NgxHeatmapComponent} from './bd2-ngx-heatmap.component';



@NgModule({
  declarations: [
    LabelsComponent,
    LabelBoxComponent,
    TooltipComponent,
    AxisBoxComponent,
    XAxisComponent,
    YAxisComponent,
    VTickMarkComponent,
    PaneBackComponent,
    SeriesBoxComponent,
    SerieRowComponent,
    DataPointBoxComponent,
    Bd2NgxHeatmapComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    Bd2NgxHeatmapComponent,
  ]

})
export class Bd2NgxHeatmapModule { }
