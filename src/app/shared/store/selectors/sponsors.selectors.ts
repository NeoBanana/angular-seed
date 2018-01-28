import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromSponsors from '../reducers/sponsors.reducer';

export const getSponsorsState = (state: fromFeature.AppState) => state.sponsors;

export const getSponsorsEntities = createSelector(
  getSponsorsState,
  fromSponsors.getSponsorsEntities
);

export const getAllSponsors = createSelector(getSponsorsEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});
export const getSponsorssLoaded = createSelector(
  getSponsorsState,
  fromSponsors.getSponsorsLoaded
);
export const getSponsorssLoading = createSelector(
  getSponsorsState,
  fromSponsors.getSponsorsLoading
);
