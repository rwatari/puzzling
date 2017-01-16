import {
  RECEIVE_PUZZLES,
  RECEIVE_PUZZLE
} from '../actions/puzzle_actions';
import merge from 'lodash/merge';

const PuzzlesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PUZZLES:
      return action.puzzles;
    case RECEIVE_PUZZLE:
      return merge({}, state, {[action.puzzle.id]: action.puzzle});
    default:
      return state;
  }
};

export default PuzzlesReducer;
