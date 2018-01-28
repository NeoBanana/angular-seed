import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromLayout from '../reducers/layout.reducer';

export const getLayoutState = (state: fromFeature.AppState) => state.layout;

export const getShowLeftSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowLeftSidenav
);

export const getShowRightSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowRightSidenav
);
export const getPageName = createSelector(
  getLayoutState,
  fromLayout.getPageName
);
