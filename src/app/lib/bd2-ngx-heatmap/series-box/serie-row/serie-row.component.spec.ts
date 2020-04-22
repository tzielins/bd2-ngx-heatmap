import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SerieRowComponent} from './serie-row.component';

describe('SerieRowComponent', () => {
  let component: SerieRowComponent;
  let fixture: ComponentFixture<SerieRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SerieRowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
