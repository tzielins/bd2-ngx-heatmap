import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PaneBackComponent} from './pane-back.component';

describe('PaneBackComponent', () => {
  let component: PaneBackComponent;
  let fixture: ComponentFixture<PaneBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaneBackComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
