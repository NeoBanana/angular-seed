import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'participant-info',
  templateUrl: './participant-info.component.html',
  styleUrls: ['./participant-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantInfoComponent implements OnInit {
  @Input() participant;
  constructor() {}

  ngOnInit() {}
}
