import {connect} from 'react-redux';
import TeamIndex from './team_index';
import {
  createTeam,
  requestTeams,
  requestTeam
} from '../../actions/team_actions';

const mapStateToProps = state => ({
  teams: state.teams,
  currentUser: state.session,
  errors: state.formErrors.team
});

const mapDispatchToProps = dispatch => ({
  createTeam: team => dispatch(createTeam(team)),
  requestTeams: () => dispatch(requestTeams()),
  requestTeam: id => dispatch(requestTeam(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamIndex);
