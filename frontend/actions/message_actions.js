import * as MessageUtil from '../util/message_api_util';
import {receiveMessageErrors} from './form_error_actions';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

// object actions

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

// thunks

export const requestMessages = teamId => dispatch => (
  MessageUtil.fetchMessages(teamId).then(
    messages => dispatch(receiveMessages(messages))
  )
);

export const requestMessage = id => dispatch => (
  MessageUtil.fetchMessage(id).then(
    message => dispatch(receiveMessage(message))
  )
);

export const createMessage = message => dispatch => (
  MessageUtil.createMessage(message).then(
    newMessage => {
      dispatch(receiveMessage(newMessage));
      return newMessage;
    },
    err => dispatch(receiveMessageErrors(err.responseJSON))
  )
);
