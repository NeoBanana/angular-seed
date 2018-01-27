import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'show-tool',
  template: `

  <mat-card>
    <mat-card-title>{{tool.title}}</mat-card-title>
    <mat-card-content [innerHTML]="tool.body"></mat-card-content>

  </mat-card>
  `,
  styles: [
    `mat-card{
    margin:10px;
  }
  `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowToolComponent {
  @Input() tool: any;
}
