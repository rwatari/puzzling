import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import FormErrorsReducer from './form_errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  formErrors: FormErrorsReducer
});

export default RootReducer;
