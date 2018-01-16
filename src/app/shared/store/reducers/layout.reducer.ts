import * as fromLayout from '../actions/layout.action';

export interface LayoutState {
  showSidenav: boolean;
}

const INITIAL_STATE: LayoutState = {
  showSidenav: false
};

export function reducer(
  state = INITIAL_STATE,
  action: fromLayout.LayoutActions
): LayoutState {
  switch (action.type) {
    case fromLayout.ActionTypes.TOGGLE_SIDENAV: {
      return { ...state, showSidenav: action.payload };
    }
    default: {
      return state;
    }
  }
}
export const getShowSidenav = (state: LayoutState) => state.showSidenav;
