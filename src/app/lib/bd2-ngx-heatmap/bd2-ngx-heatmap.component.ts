import {Component, Input, OnInit} from '@angular/core';
import {GraphicContext, LookAndFeel, Serie} from '../bd2-heatmap.dom';
import {scaleBand, ScaleBand, scaleLinear, ScaleLinear} from 'd3-scale';


@Component({
  selector: 'bd2-ngx-heatmap',
  templateUrl: './bd2-ngx-heatmap.component.html',
  styleUrls: ['./bd2-ngx-heatmap.component.css']
})
export class Bd2NgxHeatmapComponent implements OnInit {

  series: Serie[];

  @Input()
  set data(data: Serie[]) {
    this.series = data;

    this.updatePaneProperties(this.series, this.lookAndFeel);
  }

  @Input()
  hidden = false;

  svgWidth = '100%';
  svgHeight = '0';
  viewBox = '0 0 500 0';

  mainPaneTransform: string;

  lookAndFeel: LookAndFeel = {
    vMargin: 25,
    hMargin: 20,

    smallRowWidth: 20,
    bigRowWidth: 40,

    rowGap: 0.1,

  };

  constructor() { }

  ngOnInit(): void {
  }

  updatePaneProperties(data: any[], lookAndFeel: LookAndFeel) {

    // const pWidth = 500;
    const pHeight = this.calculateWorkspaceHeight(data, lookAndFeel);

    this.viewBox = `0 0 500 ${pHeight}`;

    this.mainPaneTransform = `translate(${lookAndFeel.hMargin}, ${lookAndFeel.vMargin})`

  }

  calculateWorkspaceHeight(data: any[], lookAndFeel: LookAndFeel) {
    const dH = data.length <= 50 ? data.length * lookAndFeel.bigRowWidth : data.length * lookAndFeel.smallRowWidth;
    return dH + 2 * lookAndFeel.vMargin;

  }

  prepareScales(data: Serie[], context: GraphicContext, lookAndFeel: LookAndFeel): GraphicContext {

    context = Object.assign(new GraphicContext(), context);

    const timeDomain = this.timeDomain(data);

    context.xScale = scaleLinear()
                      .clamp(true)
                      .domain(timeDomain)
                      .range([0, context.workspaceWidth]);

    context.yScale = scaleBand().padding(lookAndFeel.rowGap);
    return context;
  }

  timeDomain(data: Serie[]): [number, number] {
    if (data.length < 1) {
      return [NaN, NaN];
    }

    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;

    data.forEach( serie => {
      if (serie.data.length > 0) {
        min = Math.min(min, serie.data[0].x);
        max = Math.max(max, serie.data[serie.data.length-1].x);
    })

    min = isFinite(min) ? min : 0;
    max = isFinite(max) ? max : 1;

    return [min, max];

  }

}
