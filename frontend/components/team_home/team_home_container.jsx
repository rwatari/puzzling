import {connect} from 'react-redux';
import {requestTeam} from '../../actions/team_actions';
import {requestTeamPuzzles} from '../../actions/puzzle_actions';
import {requestMessages} from '../../actions/message_actions';
import TeamHome from './team_home';

const mapStateToProps = (state, ownProps) => ({
  team: state.teams[ownProps.params.teamId],
  puzzles: state.puzzles,
  messages: state.messages
});

const mapDispatchToProps = dispatch => ({
  requestTeam: id => dispatch(requestTeam(id)),
  requestUnsolvedPuzzles: id => dispatch(requestTeamPuzzles({
    team_id: id,
    solved: false
  })),
  requestMessages: id => dispatch(requestMessages(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamHome);
