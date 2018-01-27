import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../shared/store';
import * as layoutActions from '../../../shared/store/actions/layout.action';
@Injectable()
export class HomeSandbox {
  constructor(protected appState$: Store<fromStore.AppState>) {
    this.appState$.dispatch(new layoutActions.ChangePageName('Home'));
  }
}
