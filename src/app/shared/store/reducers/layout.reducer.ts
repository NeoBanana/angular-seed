import * as fromLayout from '../actions/layout.action';

export interface LayoutState {
  showLeftSidenav: boolean;
  showRightSidenav: boolean;
  pageName: string;
}

const INITIAL_STATE: LayoutState = {
  showLeftSidenav: false,
  showRightSidenav: false,
  pageName: 'hello'
};

export function reducer(
  state = INITIAL_STATE,
  action: fromLayout.LayoutActions
): LayoutState {
  switch (action.type) {
    case fromLayout.LayoutActionTypes.TOGGLE_LEFT_SIDENAV: {
      return { ...state, showLeftSidenav: action.payload };
    }
    case fromLayout.LayoutActionTypes.CLOSE_LEFT_SIDENAV: {
      return { ...state, showLeftSidenav: false };
    }
    case fromLayout.LayoutActionTypes.TOGGLE_RIGHT_SIDENAV: {
      return { ...state, showRightSidenav: action.payload };
    }
    case fromLayout.LayoutActionTypes.CLOSE_RIGHT_SIDENAV: {
      return { ...state, showRightSidenav: false };
    }
    case fromLayout.LayoutActionTypes.CHANGE_PAGE_NAME: {
      return { ...state, pageName: action.payload };
    }
    default: {
      return state;
    }
  }
}
export const getShowLeftSidenav = (state: LayoutState) => state.showLeftSidenav;
export const getShowRightSidenav = (state: LayoutState) =>
  state.showRightSidenav;
export const getPageName = (state: LayoutState) => state.pageName;
