import { Component, OnInit } from '@angular/core';
import { ContactSandbox } from './contact.sandbox';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactSandbox]
})
export class ContactComponent implements OnInit {
  constructor(private sandbox: ContactSandbox) {}

  ngOnInit() {}
}
