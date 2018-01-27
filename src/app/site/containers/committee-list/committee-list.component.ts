import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-committee-list',
  templateUrl: './committee-list.component.html',
  styleUrls: ['./committee-list.component.scss']
})
export class CommitteeListComponent {
  @Input() list: Array<any>;
}
