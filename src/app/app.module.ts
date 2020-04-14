import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Bd2NgxHeatmapComponent } from './lib/bd2-ngx-heatmap/bd2-ngx-heatmap.component';
import { AxisBoxComponent } from './lib/bd2-ngx-heatmap/axis-box/axis-box.component';

@NgModule({
  declarations: [
    AppComponent,
    Bd2NgxHeatmapComponent,
    AxisBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
