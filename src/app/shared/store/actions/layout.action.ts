import { Action } from '@ngrx/store';
import { type } from '../../utility';

export const ActionTypes = {
  TOGGLE_SIDENAV: type('[Layout] Toggle Sidenav')
};

/**
 * Settings Actions
 */

export class ToggleSidenav implements Action {
  type = ActionTypes.TOGGLE_SIDENAV;

  constructor(public payload: boolean) {}
}

export type LayoutActions = ToggleSidenav;
