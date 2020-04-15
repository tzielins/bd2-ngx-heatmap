import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieBoxComponent } from './serie-box.component';

describe('SerieBoxComponent', () => {
  let component: SerieBoxComponent;
  let fixture: ComponentFixture<SerieBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
