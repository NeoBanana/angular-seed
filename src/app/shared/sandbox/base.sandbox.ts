import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as store from '../store';
import { TranslateService } from '@ngx-translate/core';
import * as layoutActions from '../store/actions/layout.action';
import { Subscription } from 'rxjs';
import * as fromAuth from '../../Auth/store';
import * as fromStore from '../store';

export abstract class Sandbox {
  public loggedUser: any;
  public subscribers: Array<Subscription> = [];
  public logged: boolean;

  constructor(
    protected appState$: Store<store.AppState>,
    protected translate: TranslateService
  ) {
    this.subscribers.push(
      this.appState$
        .select(fromAuth.getLogged)
        .subscribe(logged => (this.logged = logged)),
      this.appState$.select(fromAuth.getLoggedUser).subscribe(loggesuser => {
        this.loggedUser = loggesuser;
      })
    );
  }

  setPageNameByCode(translateCode) {
    this.translate.get(translateCode).subscribe((res: string) => {
      this.appState$.dispatch(new layoutActions.ChangePageName(res));
    });
  }
  setPageName(pageName) {
    this.appState$.dispatch(new layoutActions.ChangePageName(pageName));
  }
  routerBack() {
    this.appState$.dispatch(new fromStore.Back());
  }
  routerGo(path) {
    this.appState$.dispatch(new fromStore.Go(path));
  }
  logout() {
    this.appState$.dispatch(new fromAuth.LogOutUser('logout'));
  }
  ngOnDestroy() {
    for (let sub of this.subscribers) {
      sub.unsubscribe();
    }
  }
}
