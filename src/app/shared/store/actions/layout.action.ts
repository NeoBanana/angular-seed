import { Action } from '@ngrx/store';
import { type } from '../../utility';

export const ActionTypes = {
  TOGGLE_SIDENAV: type('[Layout] Toggle Sidenav'),
  CLOSE_SIDENAV: type('[Layout] CLOSE Sidenav'),
  CHANGE_PAGE_NAME: type('[Layout] Change Page')
};

/**
 * Settings Actions
 */

export class ToggleSidenav implements Action {
  readonly type = ActionTypes.TOGGLE_SIDENAV;

  constructor(public payload: any) {}
}
export class CloseSidenav implements Action {
  readonly type = ActionTypes.CLOSE_SIDENAV;
  constructor(public payload: any = false) {}
}

export class ChangePageName implements Action {
  readonly type = ActionTypes.CHANGE_PAGE_NAME;

  constructor(public payload: any) {}
}
export type LayoutActions = ToggleSidenav | ChangePageName | CloseSidenav;
