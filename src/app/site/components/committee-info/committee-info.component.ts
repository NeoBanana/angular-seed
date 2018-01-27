import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-committee-info',
  templateUrl: './committee-info.component.html',
  styleUrls: ['./committee-info.component.scss']
})
export class CommitteeInfoComponent {
  @Input() committee;
}
