import { Component, OnInit } from '@angular/core';
import { ContactSandbox } from './contact.sandbox';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactSandbox]
})
export class ContactComponent {
  constructor(private sandbox: ContactSandbox) {}
  $querry: Observable<string> = of('');
  search(querry) {
    this.$querry = of(querry);
  }
}
