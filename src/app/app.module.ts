import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {Bd2NumHeatmapModule} from './lib/bd2-num-heatmap/bd2-num-heatmap.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Bd2NumHeatmapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
