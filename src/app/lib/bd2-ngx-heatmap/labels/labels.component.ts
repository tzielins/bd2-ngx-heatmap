import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GraphicContext, Serie} from '../../bd2-heatmap.dom';

@Component({
  selector: '[bd2-labels]',
  template: `
    <svg:g *ngIf="graphic && data" class="labels">
        <svg:g bd2-label-box *ngFor="let serie of data; let ix = index; trackBy: trackByIndex"
               [serie]="serie"
               [yPosition]="yPosition(serie)" [yHeight]="yHeight()" [yMiddle]="yMiddle(serie)"
               [band]="this.graphic.yScale.bandwidth()" [color]="this.graphic.labelsColors(ix)"
        ></svg:g>
      <svg:text display="none">{{message()}}</svg:text>
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

  //
  msgI = 1;
  message() {
    console.log('Labels', this.msgI++);
    return 'Labels';
  }
  constructor() {
    console.log("Labels Created");
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
    //console.log("Band", this.graphic.yScale.bandwidth());
    return this.graphic.yScale(serie.key)+this.graphic.yScale.bandwidth()/2;
  }


  yHeight() {
    return 2+this.graphic.yScale.bandwidth() / 2;
  }



}
