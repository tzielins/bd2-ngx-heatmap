import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ScaleBand, ScaleLinear} from 'd3-scale';
import {Tick} from '../../../bd2-heatmap.dom';

//

@Component({
  selector: '[bd2-x-axis]',
  template: `
    <svg:g class="x-axis" [attr.transform]="axisTransform" text-anchor="middle" font-size="10" fill="grey">
      <!--<svg:line x1="0" y1="0" y2="0" [attr.x2]="x2" stroke="grey"></svg:line>-->
      <svg:g *ngFor="let tick of ticks" bd2-v-tick-mark class="tickMark" [tick]="tick"></svg:g>
    </svg:g>
  `,
  styles: [
  ]
})
export class XAxisComponent implements OnInit, OnChanges {

  @Input()
  xScale: ScaleBand<any>;

  @Input()
  yPosition: number;

  @Input()
  top = false;

  axisTransform: string;
  x2: number;
  ticks: Tick[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.axisTransform = `translate(0,${this.yPosition})`;
    this.x2 = this.xScale?.range()[1];
    this.ticks = this.preapreTicks(this.xScale);
  }

  tickXPosition(tick: any) {
    return this.xScale(tick) + this.xScale.bandwidth() / 2;
  }

  tickYPosition() {
    return this.top ? -3 : 3;
  }

  preapreTicks(xScale: ScaleBand<any>): Tick[] {
    const positions = this.calculateTicksPosition(xScale);

    return positions.map( tick => new Tick(this.tickXPosition(tick), this.tickYPosition(), tick, this.top, false));
  }

  calculateTicksPosition(xScale: ScaleBand<any>) {
    if (!xScale) { return []; }
    const ticks = [];
    const domain = xScale.domain();
    const step = this.domainStep(domain.length);
    for (let i = 0; i < domain.length; i += step) {
      ticks.push(domain[i]);
    }
    //console.log('T', ticks);
    return ticks;
  }

  domainStep(length: number) {
    if (length <= 25) {
      return 4;
    }
    if (length <= 73) {
      return 6;
    }
    return 12;
  }

}
