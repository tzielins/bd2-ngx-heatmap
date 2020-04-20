import {Component, Input, OnInit} from '@angular/core';
import {Tick} from '../../../../bd2-heatmap.dom';

@Component({
  selector: '[bd2-v-tick-mark]',
  template: `
    <svg:line *ngIf="tick"
              [attr.x1]="tick.x" [attr.x2]="tick.x"
              y1="0" [attr.y2]="tick.top ? -5 : 5" stroke="grey"
    ></svg:line>
    <svg:text *ngIf="tick" [attr.x]="tick.x" [attr.y]="tick.top ? -9 : 9" [attr.dy]="tick.top ? 0 : '0.6em'">{{tick.label}}</svg:text>
  `,
  styles: [
  ]
})
export class VTickMarkComponent implements OnInit {

  @Input()
  tick: Tick;


  constructor() {
  }


  ngOnInit(): void {

  }

}
