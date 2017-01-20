import * as PuzzleUtil from '../util/puzzle_api_util';
import {receivePuzzleErrors} from './form_error_actions';

export const RECEIVE_PUZZLES = 'RECEIVE_PUZZLES';
export const RECEIVE_PUZZLE = 'RECEIVE_PUZZLE';

// object actions

export const receivePuzzles = puzzles => ({
  type: RECEIVE_PUZZLES,
  puzzles
});

export const receivePuzzle = puzzle => ({
  type: RECEIVE_PUZZLE,
  puzzle
});

// thunks

export const requestTeamPuzzles = query => dispatch => (
  PuzzleUtil.fetchTeamPuzzles(query).then(
    puzzles => dispatch(receivePuzzles(puzzles))
  )
);

export const requestUserPuzzles = query => dispatch => (
  PuzzleUtil.fetchUserPuzzles(query).then(
    puzzles => dispatch(receivePuzzles(puzzles))
  )
);

export const requestPuzzle = id => dispatch => (
  PuzzleUtil.fetchPuzzle(id).then(
    puzzle => dispatch(receivePuzzle(puzzle))
  )
);

export const createPuzzle = puzzle => dispatch => (
  PuzzleUtil.createPuzzle(puzzle).then(
    newPuzzle => {
      dispatch(receivePuzzle(newPuzzle));
      return newPuzzle;
    },
    err => dispatch(receivePuzzleErrors(err.responseJSON))
  )
);

export const updatePuzzle = puzzle => dispatch => (
  PuzzleUtil.updatePuzzle(puzzle).then(
    newPuzzle => {
      dispatch(receivePuzzle(newPuzzle));
      return newPuzzle;
    },
    err => dispatch(receivePuzzleErrors(err.responseJSON))
  )
);

export const createSolving = solving => dispatch => (
  PuzzleUtil.createSolving(solving).then(
    puzzle => dispatch(receivePuzzle(puzzle))
  )
);

export const deleteSolving = solving => dispatch => (
  PuzzleUtil.deleteSolving(solving).then(
    puzzle => dispatch(receivePuzzle(puzzle))
  )
);
