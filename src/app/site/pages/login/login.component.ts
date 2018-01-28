import { Component, OnInit } from '@angular/core';
import { LoginSandbox } from './login.sandbox';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginSandbox]
})
export class LoginComponent implements OnInit {
  constructor(private sandbox: LoginSandbox) {}

  ngOnInit() {}
}
