import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bd2NgArbHeatmapComponent } from './bd2-ng-arb-heatmap.component';

describe('Bd2NgArbHeatmapComponent', () => {
  let component: Bd2NgArbHeatmapComponent;
  let fixture: ComponentFixture<Bd2NgArbHeatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bd2NgArbHeatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bd2NgArbHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
