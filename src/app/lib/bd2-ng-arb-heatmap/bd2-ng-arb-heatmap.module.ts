import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Bd2NgArbHeatmapComponent} from './bd2-ng-arb-heatmap/bd2-ng-arb-heatmap.component';
import {Bd2NgxHeatmapModule} from '../bd2-ngx-heatmap/bd2-ngx-heatmap.module';


@NgModule({
  declarations: [Bd2NgArbHeatmapComponent],
  imports: [
    CommonModule,
    Bd2NgxHeatmapModule
  ],
  exports: [Bd2NgArbHeatmapComponent]
})
export class Bd2NgArbHeatmapModule { }
