import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GraphicContext} from '../../bd2-heatmap.dom';

@Component({
  selector: '[bd2-pane-back]',
  template: `
    <svg:pattern id="pattern-diagonal" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <svg:line x1="0" y1="0" x2="0" y2="10" style="stroke:lightgrey; stroke-width:1" />
    </svg:pattern>

    <svg:rect class="dataBackground" x="2" y="2"
          [attr.width]="graphic.workspaceWidth-4" [attr.height]="graphic.workspaceHeight-4" fill="url(#pattern-diagonal)"

    >
    </svg:rect>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaneBackComponent implements OnInit {

  @Input()
  graphic: GraphicContext;

  constructor() { }

  ngOnInit(): void {
  }

}
