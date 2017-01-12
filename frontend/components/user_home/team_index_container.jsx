import {connect} from 'react-redux';
import TeamIndex from './team_index';
import {
  createTeam,
  requestTeams
} from '../../actions/team_actions';

const mapStateToProps = state => ({
  teams: state.teams,
  errors: state.formErrors.team
});

const mapDispatchToProps = dispatch => ({
  createTeam: team => dispatch(createTeam(team)),
  requestTeams: () => dispatch(requestTeams())
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamIndex);
