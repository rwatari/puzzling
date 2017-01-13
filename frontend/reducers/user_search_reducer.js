import {RECEIVE_SEARCHED_USERS} from '../actions/team_actions';

const UserSearchReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCHED_USERS:
      return action.users;
    default:
      return state;
  }
};

export default UserSearchReducer;
