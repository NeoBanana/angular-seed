import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as store from '../store';
import { TranslateService } from '@ngx-translate/core';
import * as layoutActions from '../store/actions/layout.action';

export abstract class Sandbox {
  constructor(
    protected appState$: Store<store.AppState>,
    protected translate: TranslateService
  ) {}

  setPageNameByCode(translateCode) {
    this.translate.get(translateCode).subscribe((res: string) => {
      this.appState$.dispatch(new layoutActions.ChangePageName(res));
    });
  }
  setPageName(pageName) {
    this.appState$.dispatch(new layoutActions.ChangePageName(pageName));
  }
}
