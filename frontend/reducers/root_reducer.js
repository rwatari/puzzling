import {combineReducers} from 'redux';
import {LOGOUT_USER} from '../actions/session_actions';
import SessionReducer from './session_reducer';
import FormErrorsReducer from './form_errors_reducer';
import TeamsReducer from './teams_reducer';
import PuzzlesReducer from './puzzles_reducer';
import MessagesReducer from './messages_reducer';

const _appReducer = combineReducers({
  session: SessionReducer,
  formErrors: FormErrorsReducer,
  teams: TeamsReducer,
  puzzles: PuzzlesReducer,
  messages: MessagesReducer
});

const RootReducer = (state, action) => {
  if (action.type === LOGOUT_USER) {
    state = {};
  }

  return _appReducer(state, action);
};

export default RootReducer;
