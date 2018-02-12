import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { RegisterSandbox } from "./register.sandbox";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  providers: [RegisterSandbox]
})
export class RegisterComponent implements OnInit {
  hide1 = true;
  hide2 = true;
  email = new FormControl("", [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError("required")
      ? "Uwaga puste pole"
      : this.email.hasError("email") ? "Nie poprawny email" : "";
  }
  constructor(
    private sandbox: RegisterSandbox,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {}
}
