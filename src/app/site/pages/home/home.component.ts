import { Component, OnInit } from '@angular/core';
import { HomeSandbox } from './home.sandbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeSandbox]
})
export class HomeComponent implements OnInit {
  myVal = '<a href="/edycja/1">test</a>';

  constructor(private homeSandbox: HomeSandbox) {}

  ngOnInit() {}
}
