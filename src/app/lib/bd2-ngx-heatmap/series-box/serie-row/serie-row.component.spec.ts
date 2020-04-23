import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SerieRowComponent} from './serie-row.component';
import {GraphicContext, Serie} from '../../../bd2-heatmap.dom';
import {scaleBand} from 'd3-scale';

describe('SerieRowComponent', () => {
  let component: SerieRowComponent;
  let fixture: ComponentFixture<SerieRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SerieRowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onChangs calculates properties', () => {
    const graphic = new GraphicContext();
    graphic.yScale = scaleBand<any>().domain([1, 2]).range([0, 10]);

    component.graphic = graphic;
    component.serie = {key: 1} as Serie;

    component.ngOnChanges({});
    expect(component.yPosition).toBe(0);
    expect(component.yHeight).toBe(5);

  });
});
