
// import * as d3Scale from 'd3-scale';
import {ScaleBand, ScaleLinear} from 'd3-scale';

export type LookAndFeel = {
  vMargin: number;
  hMargin: number;

  smallRowWidth: number;
  bigRowWidth: number;

  rowGap: number;
};

export class GraphicContext {

  workspaceWidth: number;
  xScale: ScaleLinear<number, number>;
  yScale: ScaleBand<any>;
}


export type Serie = {

  dataId?: number | string;
  label: string;
  data: Point[];

  min: number;
  max: number;
  mean: number;

};


export type Point = {

  x: number;
  y: number;

};
