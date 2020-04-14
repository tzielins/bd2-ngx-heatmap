import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bd2NgxHeatmapComponent } from './bd2-ngx-heatmap.component';

describe('Bd2NgxHeatmapComponent', () => {
  let component: Bd2NgxHeatmapComponent;
  let fixture: ComponentFixture<Bd2NgxHeatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bd2NgxHeatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bd2NgxHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
