import { Component, OnInit, OnDestroy } from "@angular/core";
import { LayoutSandbox } from "./layout.sandbox";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  constructor(public layoutSandbox: LayoutSandbox) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
