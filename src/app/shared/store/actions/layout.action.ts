import { Action } from '@ngrx/store';
import { type } from '../../utility';

export const ActionTypes = {
  TOGGLE_LEFT_SIDENAV: type('[Layout] Toggle Left Sidenav'),
  CLOSE_LEFT_SIDENAV: type('[Layout] CLOSE Left Sidenav'),
  TOGGLE_RIGHT_SIDENAV: type('[Layout] Toggle Right Sidenav'),
  CLOSE_RIGHT_SIDENAV: type('[Layout] CLOSE Right Sidenav'),
  CHANGE_PAGE_NAME: type('[Layout] Change Page')
};

/**
 * Settings Actions
 */

export class ToggleLeftSidenav implements Action {
  readonly type = ActionTypes.TOGGLE_LEFT_SIDENAV;

  constructor(public payload: any) {}
}
export class CloseLeftSidenav implements Action {
  readonly type = ActionTypes.CLOSE_LEFT_SIDENAV;
  constructor(public payload: any = false) {}
}
export class ToggleRightSidenav implements Action {
  readonly type = ActionTypes.TOGGLE_RIGHT_SIDENAV;

  constructor(public payload: any) {}
}
export class CloseRightSidenav implements Action {
  readonly type = ActionTypes.CLOSE_RIGHT_SIDENAV;
  constructor(public payload: any = false) {}
}
export class ChangePageName implements Action {
  readonly type = ActionTypes.CHANGE_PAGE_NAME;

  constructor(public payload: any) {}
}
export type LayoutActions =
  | ToggleLeftSidenav
  | CloseLeftSidenav
  | ToggleRightSidenav
  | CloseRightSidenav
  | ChangePageName;
