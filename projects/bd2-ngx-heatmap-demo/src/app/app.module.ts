import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {Bd2NgxHeatmapModule} from 'bd2-ngx-heatmap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ParamsFormComponent } from './params-form/params-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ParamsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Bd2NgxHeatmapModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
