import {Bd2HeatmapUtil} from '../bd2-heatmap-util';
import {BoxDef, BoxSerie, GraphicContext, LookAndFeelSizing, Point, Serie} from '../bd2-heatmap.dom';
import {scaleBand, scaleLinear} from 'd3-scale';

export class BD2ArbHeatmapUtil extends Bd2HeatmapUtil {

  addScales(context: GraphicContext, data: BoxSerie[], lookAndFeel: LookAndFeelSizing) {

    const defMargin = 0.5;
    let timeDomain = this.timeDomain(data);
    timeDomain = [timeDomain[0]-defMargin, timeDomain[1]+defMargin];

    context.xScale = scaleLinear()
      .clamp(true)
      .domain(timeDomain)
      .range([0, context.workspaceWidth]);

    const yDomain = data.map(s => s.key);

    context.yScale = scaleBand()
      .paddingInner(lookAndFeel.rowGap)
      .paddingOuter(0)
      .domain(yDomain)
      .range([0, context.workspaceHeight]);

    context.colorScale = this.heatmapScale(data);


  }

  seriesToAsymBoxes(series: Serie[]): BoxSerie[] {
    return series.map(s => this.serieToAsymBoxes(s));
  }

  serieToAsymBoxes(org: Serie): BoxSerie {

    const cpy = Object.assign(new BoxSerie(), org);
    cpy.data = this.pointsToAsymBoxes(org.data);
    return cpy;
  }

  pointsToAsymBoxes(points: Point[], defMargin = 0.5): BoxDef[] {
    if (!points || points.length === 0) { return []; }

    if (points.length === 1) {
      const point = points[0];
      return [new BoxDef(point.x, point.y, point.x - defMargin, point.x + defMargin)];
    }

    const boxes = [];
    const first = points[0];
    boxes.push(new BoxDef(first.x, first.y, (3 * first.x - points[1].x) / 2, (first.x + points[1].x) / 2));

    for (let i = 1; i < (points.length - 1); i++) {
      boxes.push(this.asymBoxFromPoints(points[i], points[i - 1], points[i + 1]));
    }

    const last = points[points.length - 1];
    boxes.push(new BoxDef(last.x, last.y, (points[points.length - 2].x + last.x) / 2, (3 * last.x - points[points.length - 2].x) / 2));

    return boxes;
  }

  asymBoxFromPoints(point: Point, prev: Point, next: Point) {
    return new BoxDef(point.x, point.y, (prev.x + point.x) / 2, (point.x + next.x) / 2);
  }
}
