import {Component, Input, OnInit} from '@angular/core';
import {GraphicContext, Serie} from '../../bd2-heatmap.dom';

@Component({
  selector: '[bd2-labels]',
  template: `
    <svg:g *ngIf="graphic && data" class="labels">
        <svg:g bd2-label-box *ngFor="let serie of data"
               [serie]="serie"
               [yPosition]="yPosition(serie)" [yHeight]="yHeight()" [yMiddle]="yMiddle(serie)"
        ></svg:g>
    </svg:g>
  `,
  styles: [
  ]
})
export class LabelsComponent implements OnInit {

  @Input()
  graphic: GraphicContext;

  @Input()
  data: Serie[];

  constructor() { }

  ngOnInit(): void {
  }

  yPosition(serie: Serie) {
    return this.graphic.yScale(serie.key) + this.graphic.yScale.bandwidth() / 4;
  }

  yMiddle(serie: Serie) {
    return this.graphic.yScale(serie.key)+this.graphic.yScale.bandwidth()/2;
  }


  yHeight() {
    return 2+this.graphic.yScale.bandwidth() / 2;
  }



}
