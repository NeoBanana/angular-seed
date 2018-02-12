import { Component, OnInit } from "@angular/core";
import { AdminDaneKomitetuSandbox } from "./admin-dane-komitetu.sandbox";

@Component({
  selector: "app-admin-dane-komitetu",
  templateUrl: "./admin-dane-komitetu.component.html",
  styleUrls: ["./admin-dane-komitetu.component.scss"],
  providers: [AdminDaneKomitetuSandbox]
})
export class AdminDaneKomitetuComponent implements OnInit {
  constructor(private sandbox: AdminDaneKomitetuSandbox) {}

  ngOnInit() {}
}
