import { Action } from '@ngrx/store';
import { type } from '../../utility';
import * as fromModels from '../../models/models';

export const ActionTypes = {
  LOAD_SPONSORS: type('[Sponsors] Load'),
  LOAD_SPONSORS_FAIL: type('[Sponsors] Load Fail'),
  LOAD_SPONSORS_SUCCESS: type('[Sponsors] Load Success')
};

/**
 * Settings Actions
 */
export class LoadSponsorsAction implements Action {
  type = ActionTypes.LOAD_SPONSORS;
  constructor() {}
}
export class LoadSponsorsFailAction implements Action {
  type = ActionTypes.LOAD_SPONSORS_FAIL;

  constructor(public payload: any) {}
}
export class LoadSponsorsSuccessAction implements Action {
  type = ActionTypes.LOAD_SPONSORS_SUCCESS;

  constructor(public payload: fromModels.ISponsor[]) {}
}
export type SponsorsActions =
  | LoadSponsorsAction
  | LoadSponsorsFailAction
  | LoadSponsorsSuccessAction;
