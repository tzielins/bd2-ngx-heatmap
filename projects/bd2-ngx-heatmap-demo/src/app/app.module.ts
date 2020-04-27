import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {Bd2NgxHeatmapModule} from 'bd2-ngx-heatmap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Bd2NgxHeatmapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
