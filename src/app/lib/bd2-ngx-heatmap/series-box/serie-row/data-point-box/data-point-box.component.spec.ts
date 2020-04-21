import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DataPointBoxComponent} from './data-point-box.component';

describe('DataPointBoxComponent', () => {
  let component: DataPointBoxComponent;
  let fixture: ComponentFixture<DataPointBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPointBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPointBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
