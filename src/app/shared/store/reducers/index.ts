import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as fromRouter from './router.reducer';
import * as fromLanguage from './language.reducer';
import * as fromLayout from './layout.reducer';
import * as fromSponsors from './sponsors.reducer';

export interface AppState {
  router: RouterReducerState<fromRouter.RouterStateUrl>;
  language: fromLanguage.LanguageState;
  layout: fromLayout.LayoutState;
  sponsors: fromSponsors.SponsorsState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  language: fromLanguage.reducer,
  layout: fromLayout.reducer,
  sponsors: fromSponsors.reducer
};

export const getRouterState = createFeatureSelector<
  RouterReducerState<fromRouter.RouterStateUrl>
>('router');

export { CustomSerializer } from './router.reducer';
