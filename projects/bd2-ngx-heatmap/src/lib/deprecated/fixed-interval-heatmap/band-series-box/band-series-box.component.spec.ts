import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BandSeriesBoxComponent} from './band-series-box.component';

describe('BandSeriesBoxComponent', () => {
  let component: BandSeriesBoxComponent;
  let fixture: ComponentFixture<BandSeriesBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BandSeriesBoxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandSeriesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
