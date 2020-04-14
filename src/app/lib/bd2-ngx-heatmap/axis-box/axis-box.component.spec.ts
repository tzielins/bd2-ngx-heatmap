import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxisBoxComponent } from './axis-box.component';

describe('AxisBoxComponent', () => {
  let component: AxisBoxComponent;
  let fixture: ComponentFixture<AxisBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxisBoxComponent ]
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
});
