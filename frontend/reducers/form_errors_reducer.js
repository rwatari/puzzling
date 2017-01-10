import {RECEIVE_SESSION_ERRORS} from '../actions/form_error_actions';
import merge from 'lodash/merge';

const _defaultState = {
  session:[]
};

const FormErrorsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, state, {session: action.errors});
    default:
      return state;
  }
};

export default FormErrorsReducer;
