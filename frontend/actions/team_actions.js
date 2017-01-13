import * as TeamUtil from '../util/team_api_util';
import {receiveTeamErrors} from './form_error_actions';

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';

// object actions

export const receiveTeams = teams => ({
  type: RECEIVE_TEAMS,
  teams
});

export const receiveTeam = team => ({
  type: RECEIVE_TEAM,
  team
});

// thunks

export const requestTeams = () => dispatch => (
  TeamUtil.fetchTeams().then(
    teams => dispatch(receiveTeams(teams))
  )
);

export const requestTeam = id => dispatch => (
  TeamUtil.fetchTeam(id).then(
    team => dispatch(receiveTeam(team))
  )
);

export const createTeam = team => dispatch => (
  TeamUtil.createTeam(team).then(
    newTeam => dispatch(receiveTeam(newTeam)),
    err => dispatch(receiveTeamErrors(err.responseJSON))
  )
);

export const createMembership = membership => dispatch => (
  TeamUtil.createMembership(membership).then(
    team => dispatch(receiveTeam(team))
  )
);
