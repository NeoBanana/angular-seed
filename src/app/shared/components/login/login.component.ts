import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'layout-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginGroup: FormGroup;
  @Output() logIn: EventEmitter<any> = new EventEmitter();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.LoginGroup = this._formBuilder.group({
      login: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }
  /**
   * if form is submited
   */
}
