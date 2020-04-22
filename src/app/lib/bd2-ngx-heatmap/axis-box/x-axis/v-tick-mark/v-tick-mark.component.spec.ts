import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VTickMarkComponent} from './v-tick-mark.component';

describe('VTickMarkComponent', () => {
  let component: VTickMarkComponent;
  let fixture: ComponentFixture<VTickMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VTickMarkComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTickMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
