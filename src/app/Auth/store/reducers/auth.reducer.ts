import * as fromAuth from '../actions/auth.action';
import { User } from '../../../shared/models/user.model';

export interface AuthState {
  user: User;
  token: string;
  logged: boolean;
  loading: boolean;
  error: any;
}

const INITIAL_STATE: AuthState = {
  user: null,
  token: null,
  logged: false,
  loading: false,
  error: null
};

export function reducer(
  state = INITIAL_STATE,
  action: fromAuth.AuthActions
): AuthState {
  switch (action.type) {
    case fromAuth.AuthActionTypes.LOGIN:
    case fromAuth.AuthActionTypes.REGISTER:
    case fromAuth.AuthActionTypes.LOGOUT: {
      return { ...state, loading: true, logged: false };
    }
    case fromAuth.AuthActionTypes.LOGIN_SUCCESS: {
      const user = {
        id: action.payload.user.id,
        login: action.payload.user.login,
        email: action.payload.user.email,
        role: action.payload.user.role
      };

      return {
        ...state,
        loading: false,
        logged: true,
        user: user,
        error: null,
        token: action.payload.token
      };
    }

    case fromAuth.AuthActionTypes.LOGOUT_SUCCESS: {
      return INITIAL_STATE;
    }
    case fromAuth.AuthActionTypes.REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        logged: true,
        error: null,
        user: action.payload.user,
        token: action.payload.token
      };
    }
    case fromAuth.AuthActionTypes.LOGIN_FAIL:
    case fromAuth.AuthActionTypes.LOGOUT_FAIL:
    case fromAuth.AuthActionTypes.REGISTER_FAIL: {
      return { ...state, ...INITIAL_STATE, error: action.payload.error };
    }
    default: {
      return state;
    }
  }
}
export const getLoggedUser = (state: AuthState) => state.user;
export const getAuthToken = (state: AuthState) => state.token;
export const getLoading = (state: AuthState) => state.loading;
export const getLogged = (state: AuthState) => state.logged;
export const getError = (state: AuthState) => state.error;
