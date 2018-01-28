import { Component, OnInit } from '@angular/core';
import { EditionsSandbox } from './editions.sandbox';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-editions',
  templateUrl: './editions.component.html',
  styleUrls: ['./editions.component.scss'],

  providers: [EditionsSandbox]
})
export class EditionsComponent implements OnInit {
  $querry: Observable<string> = of('');
  search(querry) {
    this.$querry = of(querry);
  }
  constructor(private sandbox: EditionsSandbox) {
    this.sandbox.LoadEdition();
  }

  ngOnInit() {}
}
