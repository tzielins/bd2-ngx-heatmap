import {BD2ArbHeatmapUtil} from './bd2-arb-heatmap-util';
import {BoxDef, GraphicContext, LookAndFeelSizing, Point, Serie} from '../bd2-heatmap.dom';
import {scaleLinear, ScaleLinear} from 'd3-scale';


describe('BD2ArbHeatmapUtil', () => {

  let util: BD2ArbHeatmapUtil;

  beforeEach(() => {
    util = new BD2ArbHeatmapUtil();
  });

  it('creates', () => {

    expect(util).toBeDefined();

  });

  it('boxFromPoints makes box with borders between', () => {

    const prev = {x: 0, y: 1};
    const point = {x: 1, y: 2};
    const next = {x: 3, y: 3};

    expect(util.asymBoxFromPoints(point, prev, next)).toEqual(new BoxDef(1, 2, 0.5, 2));

  });


  it('pointsToBoxes handles corner cases', () => {

    const points = [];
    expect(util.pointsToAsymBoxes(null)).toEqual([]);
    expect(util.pointsToAsymBoxes(points)).toEqual([]);

    const point = {x: 1, y: 2};
    points.push(point);
    expect(util.pointsToAsymBoxes(points)).toEqual([new BoxDef(1, 2, 0.5, 1.5)]);
  });


  it('pointsToBoxes handles corner coverts', () => {

    const points = [];
    const prev = {x: 0, y: 1};
    const point = {x: 1, y: 2};
    const next = {x: 3, y: 3};

    points.push(prev);
    points.push(point);

    let exp = [];
    exp.push(new BoxDef(0, 1, -0.5, 0.5));
    exp.push(new BoxDef(1, 2, 0.5, 1.5));

    expect(util.pointsToAsymBoxes(points)).toEqual(exp);

    points.push(next);
    exp = [];
    exp.push(new BoxDef(0, 1, -0.5, 0.5));
    exp.push(new BoxDef(1, 2, 0.5, 2));
    exp.push(new BoxDef(3, 3, 2, 4));

    expect(util.pointsToAsymBoxes(points)).toEqual(exp);

  });

  it('serieToAsymBoxes', () => {

    const points = [];
    const prev = {x: 0, y: 1};
    const point = {x: 1, y: 2};
    const next = {x: 3, y: 3};

    points.push(prev);
    points.push(point);
    points.push(next);

    const ser: Serie = {
      key: 1,
      label: 'F',
      min: 1, max: 3, mean: (4 / 3),
      data: points
    };

    const boxes = util.serieToAsymBoxes(ser);
    expect(boxes.key).toBe(1);
    expect(boxes.label).toBe('F');
    expect(boxes.min).toBe(1);
    expect(boxes.max).toBe(3);
    expect(boxes.data.length).toBe(ser.data.length);
    expect(boxes.data[0]).toEqual(new BoxDef(0, 1, -0.5, 0.5));

  });

  it('addScales creates scales', () => {

    const graphic = new GraphicContext();
    graphic.workspaceWidth = 100;
    graphic.workspaceHeight = 200;

    const look = new LookAndFeelSizing();

    const points = [];
    const prev = {x: 0, y: 1};
    const point = {x: 1, y: 2};
    const next = {x: 3, y: 3};

    points.push(prev);
    points.push(point);
    points.push(next);

    const ser: Serie = {
      key: 1,
      label: 'F',
      min: 1, max: 3, mean: (4 / 3),
      data: points
    };

    const boxes = util.serieToAsymBoxes(ser);
    util.addScales(graphic, [boxes], look);
    expect(graphic.xScale).toBeDefined();
    expect(graphic.yScale).toBeDefined();
    expect(graphic.colorScale).toBeDefined();

    expect(graphic.xScale).toBeInstanceOf(scaleLinear().constructor);
    expect(graphic.xScale.domain()).toEqual([0-0.5,3+0.5]);


    expect(graphic.yScale(1)).toEqual(look.rowGap * 200 / 2);
    expect(graphic.yScale.bandwidth()).toEqual(200 - 200 * look.rowGap);
  });

  it('', () => {

    expect(util).toBeDefined();

  });

  it('', () => {

    expect(util).toBeDefined();

  });

  it('', () => {

    expect(util).toBeDefined();

  });



});
