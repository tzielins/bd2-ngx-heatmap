import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Bd2FixedIntervalHeatmapComponent} from './bd2-fixed-interval-heatmap.component';

describe('Bd2FixedIntervalHeatmapComponent', () => {
  let component: Bd2FixedIntervalHeatmapComponent;
  let fixture: ComponentFixture<Bd2FixedIntervalHeatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Bd2FixedIntervalHeatmapComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bd2FixedIntervalHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
