import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_TEAM_ERRORS,
  RECEIVE_PUZZLE_ERRORS
} from '../actions/form_error_actions';
import merge from 'lodash/merge';

const _defaultState = {
  session:[],
  team: [],
  puzzle: []
};

const FormErrorsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, _defaultState, {session: action.errors});
    case RECEIVE_TEAM_ERRORS:
      return merge({}, _defaultState, {team: action.errors});
    case RECEIVE_PUZZLE_ERRORS:
      return merge({}, _defaultState, {puzzle: action.errors});
    default:
      return _defaultState;
  }
};

export default FormErrorsReducer;
