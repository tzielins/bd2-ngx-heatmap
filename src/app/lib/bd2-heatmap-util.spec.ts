import {Bd2HeatmapUtil} from './bd2-heatmap-util';


fdescribe('Bd2HeatmapUtil', () => {

  let util: Bd2HeatmapUtil;

  beforeEach(() => {
    util = new Bd2HeatmapUtil();
  });

  it('creates', () => {

    expect(util).toBeDefined();

  });

  it('labels Color gives function of index', () => {

    const traces = [];
    traces.push({});
    traces.push({});
    traces.push({});

    const scale = util.labelsColors(traces);
    expect(scale(0)).toBeDefined();
    expect(scale(0)).toEqual('rgb(158, 1, 66)');
    expect(scale(1)).toBeDefined();
    expect(scale(2)).toBeDefined();


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
