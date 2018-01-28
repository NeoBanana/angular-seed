import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-committee-info',
  templateUrl: './committee-info.component.html',
  styleUrls: ['./committee-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitteeInfoComponent {
  @Input() committee;
}
