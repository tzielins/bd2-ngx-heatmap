import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {Bd2FixedIntervalHeatmapModule} from './lib/deprecated/fixed-interval-heatmap/fixed-interval-heatmap.module';
import {Bd2NgArbHeatmapModule} from './lib/bd2-ng-arb-heatmap/bd2-ng-arb-heatmap.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Bd2NgArbHeatmapModule,
    Bd2FixedIntervalHeatmapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
