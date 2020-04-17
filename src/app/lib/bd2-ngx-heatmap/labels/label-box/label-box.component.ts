import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Serie} from '../../../bd2-heatmap.dom';

@Component({
  selector: '[bd2-label-box]',
  template: `
    <svg:g *ngIf="serie" class="label"  >
      <svg:text #text x="5" [attr.y]="yMiddle"
                dominant-baseline="central" [style.font-size]="fontSize()"
                [attr.opacity]="toggled ? 1 : 0.6" [attr.fill]="toggled ? 'white' : undefined"
      >{{serie.label}}</svg:text>
      <g (mouseout)="toggleLabel(false)" (mouseover)="toggleLabel(true)">
        <svg:rect x="-7" width="7" [attr.y]="yPosition" [attr.height]="yHeight" fill="rgb(127, 127, 127)"
                  ></svg:rect>
        <svg:rect x="0" [attr.width]="textBWidth" [attr.y]="textBY" [attr.height]="textBHeight"
                  fill="black" opacity="0.8" [attr.display]="toggled ? undefined : 'none'"

        ></svg:rect>
        <svg:text x="5" [attr.y]="yMiddle"
                  dominant-baseline="central" [style.font-size]="fontSize()"
                  fill="white" [attr.display]="toggled ? undefined : 'none'"
        >{{serie.label}}</svg:text>
      </g>
      <!--<svg:line x1="-10" x2="20" [attr.y1]="yMiddle" [attr.y2]="yMiddle" stroke="black"></svg:line>-->
    </svg:g>
  `,
  styles: [
  ]
})
export class LabelBoxComponent implements OnInit {

  @Input()
  serie: Serie;

  @Input()
  yPosition: number;

  @Input()
  yMiddle: number;

  @Input()
  yHeight: number;

  @ViewChild('text')
  textNode: ElementRef<SVGGraphicsElement>;

  textBWidth = 0;
  textBY = 0;
  textBHeight;

  toggled = false;

  constructor() { }

  ngOnInit(): void {
  }

  fontSize() {
    return this.yHeight < 12 ? this.yHeight - 1 : 12;
  }

  toggleLabel(val?: boolean) {

    if (val === undefined) { val = !this.toggled; }

    this.toggled = val;

    if (this.toggled) {
      this.setTextBBox(this.textBBox());
    }

  }

  setTextBBox(rect: SVGRect) {
    this.textBY = rect.y - 4;
    this.textBHeight = rect.height + 8;
    this.textBWidth = rect.x + rect.width + 4;
  }

  textBBox(): SVGRect {
    if (!this.textNode) {
      return {x: 0, y: 0, height: 0, width: 0} as SVGRect;
    }
    return this.textNode.nativeElement.getBBox();
  }


}
