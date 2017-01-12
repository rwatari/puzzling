import {
  RECEIVE_CURRENT_USER,
  LOGOUT_USER
} from '../actions/session_actions';

const SessionReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};

export default SessionReducer;
