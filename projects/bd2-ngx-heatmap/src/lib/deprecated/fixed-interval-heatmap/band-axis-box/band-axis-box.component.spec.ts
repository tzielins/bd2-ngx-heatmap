import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BandAxisBoxComponent} from './band-axis-box.component';
import {CommonModule} from '@angular/common';
import {Bd2FixedHeatmapUtil} from '../bd2-fixed-heatmap-util';
import {LookAndFeelSizing} from '../../../bd2-heatmap.dom';
import {YAxisComponent} from '../../../plot-elements/axis/axis-box/y-axis/y-axis.component';
import {BandXAxisComponent} from './band-x-axis/band-x-axis.component';
import {ChangeDetectionStrategy} from '@angular/core';

describe('BandAxisBoxComponent', () => {
  let component: BandAxisBoxComponent;
  let fixture: ComponentFixture<BandAxisBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BandAxisBoxComponent, YAxisComponent, BandXAxisComponent],
      imports: [CommonModule]
    })
      .overrideComponent(BandAxisBoxComponent , {
        set: {  changeDetection: ChangeDetectionStrategy.Default  }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandAxisBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('renders', () => {
    // does not work, WHY, *ngIf?
    const util = new Bd2FixedHeatmapUtil();
    const context = util.prepareGraphicContext([], new LookAndFeelSizing());

    component.graphic = context;
    fixture.detectChanges();

    let g = fixture.nativeElement.querySelector('g.bd2hm-axisWrapper');
    expect(g).toBeTruthy();

    g = fixture.nativeElement.querySelector('g.bd2hm-y-axis');
    expect(g).toBeTruthy();

    g = fixture.nativeElement.querySelector('g.bd2hm-x-axis');
    expect(g).toBeTruthy();


  });
});
