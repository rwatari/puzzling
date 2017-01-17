import {connect} from 'react-redux';
import {requestTeam} from '../../actions/team_actions';
import TeamPage from './team_page';

const mapStateToProps = (state, ownProps) => ({
  team: state.teams[ownProps.params.teamId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestTeam: () => dispatch(requestTeam(ownProps.params.teamId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage);
