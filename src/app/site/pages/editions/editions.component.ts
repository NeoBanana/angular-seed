import { Component, OnInit } from '@angular/core';
import { EditionsSandbox } from './editions.sandbox';

@Component({
  selector: 'app-editions',
  templateUrl: './editions.component.html',
  styleUrls: ['./editions.component.scss'],

  providers: [EditionsSandbox]
})
export class EditionsComponent implements OnInit {
  constructor(private sandbox: EditionsSandbox) {
    this.sandbox.LoadEdition();
  }

  ngOnInit() {}
}
