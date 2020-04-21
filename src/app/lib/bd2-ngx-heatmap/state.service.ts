import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Injectable()
export class StateService {

  render$: Observable<boolean>;

  private rendering: Subject<boolean>;

  constructor() {
    this.rendering  = new Subject<boolean>();
    this.render$ = this.rendering.asObservable().pipe(debounceTime(1));
  }

  startsRendering() {
    this.rendering.next(true);
  }

  finishedRendering() {
    this.rendering.next(false);
  }
}
