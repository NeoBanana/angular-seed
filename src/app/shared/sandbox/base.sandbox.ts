import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as fromStore from "../store";

export abstract class Sandbox {
  constructor(protected appState$: Store<fromStore.AppState>) {}
}
