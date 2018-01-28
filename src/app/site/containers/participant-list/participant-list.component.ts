import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantListComponent implements OnInit {
  @Input() list;
  @Input() search: any;
  constructor() {}

  ngOnInit() {}
}
