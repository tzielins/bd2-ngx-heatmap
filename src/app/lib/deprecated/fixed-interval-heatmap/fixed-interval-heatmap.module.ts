import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Bd2FixedIntervalHeatmapComponent} from './bd2-fixed-interval-heatmap.component';
import {BandAxisBoxComponent} from './band-axis-box/band-axis-box.component';
import {BandXAxisComponent} from './band-axis-box/band-x-axis/band-x-axis.component';
import {AxisModule} from '../../axis/axis.module';


@NgModule({
  declarations: [
    BandXAxisComponent,
    BandAxisBoxComponent,
    Bd2FixedIntervalHeatmapComponent,
  ],
  imports: [
    CommonModule,
    AxisModule
  ],
  exports: [
    Bd2FixedIntervalHeatmapComponent,
  ]

})
export class Bd2FixedIntervalHeatmapModule { }
