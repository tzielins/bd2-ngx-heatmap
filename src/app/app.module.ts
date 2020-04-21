import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Bd2NgxHeatmapComponent} from './lib/bd2-ngx-heatmap/bd2-ngx-heatmap.component';
import {AxisBoxComponent} from './lib/bd2-ngx-heatmap/axis-box/axis-box.component';
import {XAxisComponent} from './lib/bd2-ngx-heatmap/axis-box/x-axis/x-axis.component';
import {YAxisComponent} from './lib/bd2-ngx-heatmap/axis-box/y-axis/y-axis.component';
import {SerieRowComponent} from './lib/bd2-ngx-heatmap/series-box/serie-row/serie-row.component';
import {DataPointBoxComponent} from './lib/bd2-ngx-heatmap/series-box/serie-row/data-point-box/data-point-box.component';
import {VTickMarkComponent} from './lib/bd2-ngx-heatmap/axis-box/x-axis/v-tick-mark/v-tick-mark.component';
import {LabelsComponent} from './lib/bd2-ngx-heatmap/labels/labels.component';
import {LabelBoxComponent} from './lib/bd2-ngx-heatmap/labels/label-box/label-box.component';
import {TooltipComponent} from './lib/bd2-ngx-heatmap/tooltip/tooltip.component';
import {FormsModule} from '@angular/forms';
import {SeriesBoxComponent} from './lib/bd2-ngx-heatmap/series-box/series-box.component';
import {PaneBackComponent} from './lib/bd2-ngx-heatmap/pane-back/pane-back.component';

@NgModule({
  declarations: [
    AppComponent,
    Bd2NgxHeatmapComponent,
    AxisBoxComponent,
    XAxisComponent,
    YAxisComponent,
    SerieRowComponent,
    DataPointBoxComponent,
    VTickMarkComponent,
    LabelsComponent,
    LabelBoxComponent,
    TooltipComponent,
    SeriesBoxComponent,
    PaneBackComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
