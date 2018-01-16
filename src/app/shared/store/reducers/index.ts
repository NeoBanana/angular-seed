import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import { routerReducer, RouterReducerState } from "@ngrx/router-store";

import * as fromRouter from "./router.reducer";
import * as fromLanguage from "./language.reducer";

export interface AppState {
  router: RouterReducerState<fromRouter.RouterStateUrl>;
  language: fromLanguage.LanguageState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  language: fromLanguage.reducer
};

export const getRouterState = createFeatureSelector<
  RouterReducerState<fromRouter.RouterStateUrl>
>("router");

export { CustomSerializer } from "./router.reducer";
