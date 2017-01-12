import {
  RECEIVE_TEAMS,
  RECEIVE_TEAM
} from '../actions/team_actions';
import {LOGOUT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const TeamsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TEAMS:
      return action.teams;
    case RECEIVE_TEAM:
      return merge({}, state, {[action.team.id]: action.team});
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default TeamsReducer;
