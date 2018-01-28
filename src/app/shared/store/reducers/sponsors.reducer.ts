import * as fromSponsors from '../actions/sponsors.action';
import * as fromModels from '../../models/models';

export interface SponsorsState {
  entities: { [id: number]: fromModels.ISponsor };
  loaded: boolean;
  loading: boolean;
}

export const initialState: SponsorsState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromSponsors.SponsorsActions
): SponsorsState {
  switch (action.type) {
    case fromSponsors.ActionTypes.LOAD_SPONSORS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromSponsors.ActionTypes.LOAD_SPONSORS_SUCCESS: {
      const sponsors = action['payload'];

      const entities = sponsors.reduce(
        (
          entities: { [id: number]: fromModels.ISponsor },
          sponsor: fromModels.ISponsor
        ) => {
          return {
            ...entities,
            [sponsor.id]: sponsor
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case fromSponsors.ActionTypes.LOAD_SPONSORS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}
export const getSponsorsEntities = (state: SponsorsState) => state.entities;
export const getSponsorsLoading = (state: SponsorsState) => state.loading;
export const getSponsorsLoaded = (state: SponsorsState) => state.loaded;
