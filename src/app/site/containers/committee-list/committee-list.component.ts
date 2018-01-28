import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-committee-list',
  templateUrl: './committee-list.component.html',
  styleUrls: ['./committee-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitteeListComponent {
  @Input() list: Array<any>;
  @Input() search: any = 'a';
}
