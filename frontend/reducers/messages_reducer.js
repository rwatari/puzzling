import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE
} from '../actions/message_actions';
import merge from 'lodash/merge';

const MessagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      return merge({}, state, {[action.message.id]: action.message});
    case REMOVE_MESSAGE:
      const newState = merge({}, state);
      delete newState[action.message.id];
      return newState;
    default:
      return state;
  }
};

export default MessagesReducer;
