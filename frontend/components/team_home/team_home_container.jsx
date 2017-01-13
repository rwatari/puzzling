import {connect} from 'react-redux';
import TeamHome from './team_home';
import {requestTeam} from '../../actions/team_actions';

const mapStateToProps = (state, ownProps) => ({
  team: state.teams[ownProps.routeParams.teamId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestTeam: () => dispatch(requestTeam(ownProps.routeParams.teamId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamHome);