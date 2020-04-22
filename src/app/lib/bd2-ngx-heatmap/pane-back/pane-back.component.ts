import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GraphicContext} from '../../bd2-heatmap.dom';

@Component({
  selector: '[bd2hm-pane-back]',
  template: `
    <svg:rect class="bd2hm-dataBackground" x="2" y="2"
              [attr.width]="graphic.workspaceWidth-4" [attr.height]="graphic.workspaceHeight-4"
    >
    </svg:rect>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaneBackComponent implements OnInit {

  @Input()
  graphic: GraphicContext;

  constructor() {
  }

  ngOnInit(): void {
  }

}
