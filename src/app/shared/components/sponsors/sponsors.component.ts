import { Component, Input } from '@angular/core';

@Component({
  selector: 'layout-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {
  @Input() sponsors: Array<any>;
}
