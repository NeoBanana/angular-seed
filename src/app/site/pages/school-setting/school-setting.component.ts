import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-school-setting",
  templateUrl: "./school-setting.component.html",
  styleUrls: ["./school-setting.component.scss"]
})
export class SchoolSettingComponent implements OnInit {
  hide1 = true;
  hide2 = true;
  email = new FormControl("", [Validators.required, Validators.email]);
  WOJ = ["Lubuskie", "Dolnoslaskie", "Pomorskie"];
  getErrorMessage() {
    return this.email.hasError("required")
      ? "Uwaga puste pole"
      : this.email.hasError("email") ? "Nie poprawny email" : "";
  }
  constructor() {}

  ngOnInit() {}
}
