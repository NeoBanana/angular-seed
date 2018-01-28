import { Component, OnInit } from '@angular/core';
import { InfoGeneralSandbox } from './info-general.sandbox';

@Component({
  selector: 'app-info-general',
  templateUrl: './info-general.component.html',
  styleUrls: ['./info-general.component.scss'],
  providers: [InfoGeneralSandbox]
})
export class InfoGeneralComponent implements OnInit {
  constructor(private sandbox: InfoGeneralSandbox) {}

  ngOnInit() {}
}
