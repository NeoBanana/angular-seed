import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminSideNavComponent {
  @Output() activate = new EventEmitter();
}
