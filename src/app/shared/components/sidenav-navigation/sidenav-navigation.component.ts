import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-sidenav-navigation',
  templateUrl: './sidenav-navigation.component.html',
  styleUrls: ['./sidenav-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavNavigationComponent {
  @Output() activate = new EventEmitter();
}
