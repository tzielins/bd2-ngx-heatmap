import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GraphicContext, Serie} from '../../bd2-heatmap.dom';

@Component({
  selector: '[bd2hm-series-box]',
  template: `
    <svg:g *ngFor="let serie of series; trackBy: trackByIndex"
           bd2hm-serie-row [graphic]="graphic" [serie]="serie"></svg:g>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeriesBoxComponent implements OnInit {

  @Input()
  series: Serie[];

  @Input()
  graphic: GraphicContext;

  constructor() { }

  trackByIndex(index: number, item: any) {
    return index;
  }

  ngOnInit(): void {
  }


}
