import * as SessionUtil from '../util/session_api_util';
import {receiveSessionErrors} from './form_error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

// thunks

export const login = user => dispatch => {
  return SessionUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  );
};

export const logout = () => dispatch => {
  return SessionUtil.logout().then(
    () => dispatch(logoutUser())
  );
};

export const signup = user => dispatch => {
  return SessionUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  );
};

// object actions

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutUser = () => ({type: LOGOUT_USER});
