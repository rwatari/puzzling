import {connect} from 'react-redux';
import {requestTeam} from '../../actions/team_actions';
import {requestTeamPuzzles} from '../../actions/puzzle_actions';
import TeamHome from './team_home';

const mapStateToProps = (state, ownProps) => ({
  team: state.teams[ownProps.params.teamId],
  puzzles: state.puzzles
});

const mapDispatchToProps = dispatch => ({
  requestTeam: id => dispatch(requestTeam(id)),
  requestUnsolvedPuzzles: id => dispatch(requestTeamPuzzles({
    team_id: id,
    solved: false
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamHome);
