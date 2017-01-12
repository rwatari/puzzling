import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_TEAM_ERRORS
} from '../actions/form_error_actions';
import merge from 'lodash/merge';

const _defaultState = {
  session:[]
};

const FormErrorsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, _defaultState, {session: action.errors});
    case RECEIVE_TEAM_ERRORS:
      return merge({}, _defaultState, {team: action.errors});
    default:
      return state;
  }
};

export default FormErrorsReducer;
