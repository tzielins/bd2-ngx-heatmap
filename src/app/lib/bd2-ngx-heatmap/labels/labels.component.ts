import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GraphicContext, Serie} from '../../bd2-heatmap.dom';

@Component({
  selector: '[bd2hm-labels]',
  template: `
    <svg:g *ngIf="graphic && data" class="bd2hm-labels">
        <svg:g bd2hm-label-box *ngFor="let serie of data; let ix = index; trackBy: trackByIndex"
               [serie]="serie"
               [yPosition]="yPosition(serie)" [yHeight]="yHeight()" [yMiddle]="yMiddle(serie)"
               [band]="this.graphic.yScale.bandwidth()" [color]="this.graphic.labelsColors(ix)"
        ></svg:g>
    </svg:g>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelsComponent implements OnInit {

  @Input()
  graphic: GraphicContext;

  @Input()
  data: Serie[];

  constructor() {
  }

  trackByIndex(index: number, item: any) {
    return index;
  }

  ngOnInit(): void {
  }

  yPosition(serie: Serie) {
    return this.graphic.yScale(serie.key) + this.graphic.yScale.bandwidth() / 4;
  }

  yMiddle(serie: Serie) {
    // console.log("Band", this.graphic.yScale.bandwidth());
    return this.graphic.yScale(serie.key) + this.graphic.yScale.bandwidth() / 2;
  }


  yHeight() {
    return 2 + this.graphic.yScale.bandwidth() / 2;
  }



}
