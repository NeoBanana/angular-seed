import * as fromLayout from '../actions/layout.action';

export interface LayoutState {
  showSidenav: boolean;
  pageName: string;
}

const INITIAL_STATE: LayoutState = {
  showSidenav: false,
  pageName: 'hello'
};

export function reducer(
  state = INITIAL_STATE,
  action: fromLayout.LayoutActions
): LayoutState {
  switch (action.type) {
    case fromLayout.ActionTypes.TOGGLE_SIDENAV: {
      return { ...state, showSidenav: action.payload };
    }
    case fromLayout.ActionTypes.CLOSE_SIDENAV: {
      return { ...state, showSidenav: false };
    }
    case fromLayout.ActionTypes.CHANGE_PAGE_NAME: {
      return { ...state, pageName: action.payload };
    }
    default: {
      return state;
    }
  }
}
export const getShowSidenav = (state: LayoutState) => state.showSidenav;
export const getPageName = (state: LayoutState) => state.pageName;
