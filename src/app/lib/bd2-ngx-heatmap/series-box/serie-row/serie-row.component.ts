import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GraphicContext, Serie} from '../../../bd2-heatmap.dom';

@Component({
  selector: '[bd2-serie-row]',
  template: `
    <svg:g *ngIf="graphic && serie" class="serieBox">
      <svg:g *ngFor="let point of serie.data; trackBy: trackByIndex" bd2-data-point-box
             [point]="point" [xScale]="graphic.xScale"
             [yPosition]="yPosition"
             [yHeight]="yHeight" [colorScale]="graphic.colorScale"
             [label]="serie.label"
      ></svg:g>
    </svg:g>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SerieRowComponent implements OnInit, OnChanges {

  @Input()
  graphic: GraphicContext;

  @Input()
  serie: Serie;

  yPosition: number;

  yHeight: number;

  constructor() {
  }

  trackByIndex(index: number, item: any) {
    return index;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.graphic && this.serie) {
      this.yPosition = this.graphic.yScale(this.serie.key);
      this.yHeight = this.graphic.yScale.bandwidth();
    }
  }

}
