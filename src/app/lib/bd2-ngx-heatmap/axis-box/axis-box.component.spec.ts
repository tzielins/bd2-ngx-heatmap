import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AxisBoxComponent} from './axis-box.component';
import {Bd2HeatmapUtil} from '../../bd2-heatmap-util';
import {LookAndFeelSizing} from '../../bd2-heatmap.dom';
import {CommonModule} from '@angular/common';

describe('AxisBoxComponent', () => {
  let component: AxisBoxComponent;
  let fixture: ComponentFixture<AxisBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AxisBoxComponent],
      imports: [CommonModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxisBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('renders', () => {
    //does not work, WHY, *ngIf?
    const util = new Bd2HeatmapUtil();
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
