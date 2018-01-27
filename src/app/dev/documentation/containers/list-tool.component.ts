import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'list-tool',
  template: `
  <show-tool *ngFor="let tool of toolList" [tool]="tool">test</show-tool>

  `,
  styles: [
    `
  `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListToolComponent {
  @Input() toolList;
  constructor() {
    console.log(this.toolList);
  }
}
