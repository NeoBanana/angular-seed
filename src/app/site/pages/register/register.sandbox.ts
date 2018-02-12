import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromStore from "../../../shared/store";
import * as layoutActions from "../../../shared/store/actions/layout.action";
import { Sandbox } from "../../../shared/sandbox/base.sandbox";
import { TranslateService } from "@ngx-translate/core";
@Injectable()
export class RegisterSandbox extends Sandbox {
  constructor(
    protected appState$: Store<fromStore.AppState>,
    protected translate: TranslateService
  ) {
    super(appState$, translate);
    this.setPageNameByCode("SIGNIN");
  }
  logIn() {
    console.log("proba zalogowania sie");
  }
}
