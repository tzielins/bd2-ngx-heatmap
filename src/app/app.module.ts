import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Bd2NgxHeatmapComponent } from './lib/bd2-ngx-heatmap/bd2-ngx-heatmap.component';
import { AxisBoxComponent } from './lib/bd2-ngx-heatmap/axis-box/axis-box.component';
import { XAxisComponent } from './lib/bd2-ngx-heatmap/axis-box/x-axis/x-axis.component';
import { YAxisComponent } from './lib/bd2-ngx-heatmap/axis-box/y-axis/y-axis.component';
import { SerieBoxComponent } from './lib/bd2-ngx-heatmap/serie-box/serie-box.component';
import { DataPointBoxComponent } from './lib/bd2-ngx-heatmap/serie-box/data-point-box/data-point-box.component';
import { VTickMarkComponent } from './lib/bd2-ngx-heatmap/axis-box/x-axis/v-tick-mark/v-tick-mark.component';

@NgModule({
  declarations: [
    AppComponent,
    Bd2NgxHeatmapComponent,
    AxisBoxComponent,
    XAxisComponent,
    YAxisComponent,
    SerieBoxComponent,
    DataPointBoxComponent,
    VTickMarkComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
