import { Action } from '@ngrx/store';
import { type } from '../../utility';

export const ActionTypes = {
  TOGGLE_SIDENAV: type('[Layout] Toggle Sidenav'),
  CHANGE_PAGE_NAME: type('[Layout] Change Page')
};

/**
 * Settings Actions
 */

export class ToggleSidenav implements Action {
  readonly type = ActionTypes.TOGGLE_SIDENAV;

  constructor(public payload: any) {}
}

export class ChangePageName implements Action {
  readonly type = ActionTypes.CHANGE_PAGE_NAME;

  constructor(public payload: any) {}
}
export type LayoutActions = ToggleSidenav | ChangePageName;
