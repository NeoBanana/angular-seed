import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Sandbox } from '../../shared/sandbox/base.sandbox';
import { Store } from '@ngrx/store';
import * as sharedStore from '../../shared/store';
import * as fromAuth from '../../Auth/store';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LogInSandbox extends Sandbox {
  error;
  constructor(
    protected appState$: Store<sharedStore.AppState>,
    protected translate: TranslateService
  ) {
    super(appState$, translate);
    this.setPageNameByCode('LOGIN');
  }

  logIn(loginData) {
    this.appState$.dispatch(new fromAuth.LogInUser(loginData));
  }
  cancel() {
    this.appState$.dispatch(new sharedStore.Back());
  }
}
