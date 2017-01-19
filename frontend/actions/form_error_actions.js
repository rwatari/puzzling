export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_TEAM_ERRORS = 'RECEIVE_TEAM_ERRORS';
export const RECEIVE_PUZZLE_ERRORS = 'RECEIVE_PUZZLE_ERRORS';
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveTeamErrors = errors => ({
  type: RECEIVE_TEAM_ERRORS,
  errors
});

export const receivePuzzleErrors = errors => ({
  type: RECEIVE_PUZZLE_ERRORS,
  errors
});

export const receiveMessageErrors = errors => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors
});
