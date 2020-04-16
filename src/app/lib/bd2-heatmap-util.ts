import {GraphicContext, LookAndFeel, Serie} from './bd2-heatmap.dom';
import {scaleBand, scaleLinear, scaleQuantize} from 'd3-scale';
import {colors} from './color-util';

export class Bd2HeatmapUtil {

  prepareGraphicContext(data: Serie[], lookAndFeel: LookAndFeel): GraphicContext {

    const context = new GraphicContext();

    this.calculateDimensions(context, data, lookAndFeel);
    this.addPaneAttributes(context, lookAndFeel);

    this.addScales(context, data, lookAndFeel);
    return context;
  }

  calculateDimensions(context: GraphicContext, data: Serie[], lookAndFeel: LookAndFeel) {

    context.pWidth = 500;
    context.workspaceWidth = context.pWidth - 2 * lookAndFeel.hMargin;

    context.workspaceHeight = this.calculateWorkspaceHeight(data, lookAndFeel);
    context.pHeight = context.workspaceHeight + 2 * lookAndFeel.vMargin;
  }

  calculateWorkspaceHeight(data: any[], lookAndFeel: LookAndFeel) {
    return data.length <= 50 ? data.length * lookAndFeel.bigRowWidth : data.length * lookAndFeel.smallRowWidth;
  }

  addPaneAttributes(context: GraphicContext, lookAndFeel: LookAndFeel) {
    context.viewBox = `0 0 500 ${context.pHeight}`;

    context.mainPaneTransform = `translate(${lookAndFeel.hMargin}, ${lookAndFeel.vMargin})`;
  }

  addScales(context: GraphicContext, data: Serie[], lookAndFeel: LookAndFeel) {

    /*const timeDomain = this.timeDomain(data);

    context.xScale = scaleLinear()
      .clamp(true)
      .domain(timeDomain)
      .range([0, context.workspaceWidth]);

     */
    const timeDomain = this.timeDomainBand(data);

    context.xScale = scaleBand()
      // .clamp(true)
      .paddingInner(0)
      .paddingOuter(0)
      .domain(timeDomain)
      .range([0, context.workspaceWidth]);

    const yDomain = data.map( s => s.key);

    context.yScale = scaleBand()
      .paddingInner(lookAndFeel.rowGap)
      .paddingOuter(0)
      .domain(yDomain)
      .range([0, context.workspaceHeight]);

    context.colorScale = this.heatmapScale(data);
  }

  timeDomain(data: Serie[]): [number, number] {

    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;

    data.forEach( serie => {
      if (serie.data.length > 0) {
        min = Math.min(min, serie.data[0].x);
        max = Math.max(max, serie.data[serie.data.length - 1].x);
      }
    });

    min = isFinite(min) ? min : 0;
    max = isFinite(max) ? max : 1;

    return [min, max];

  }

  timeDomainBand(data: Serie[]): any[] {

    const [min, max] = this.timeDomain(data);

    const res = [];

    for (let i = min; i <= max; i++) {
      res.push(i);
    }
    return res;

  }

  heatmapScale(data: Serie[]) {

    const domain = this.valuesRange(data);
    const range = colors();

    return scaleQuantize<string>().domain(domain).range(range);
  }

  valuesRange(traces: Serie[]): [number, number] {

    if (traces.length === 0) { return [NaN, NaN]; }
    let min = traces[0].min;
    let max = traces[0].max;

    traces.forEach( tr => {
      min = Math.min(min, tr.min);
      max = Math.max(max, tr.max);
    });

    return [min, max];
  }
}
