import {connect} from 'react-redux';
import {requestTeam} from '../../actions/team_actions';
import {requestTeamPuzzles} from '../../actions/puzzle_actions';
import {requestMessages} from '../../actions/message_actions';
import {requestScheduleEvents} from '../../actions/schedule_event_actions';
import TeamHome from './team_home';

const mapStateToProps = (state, ownProps) => ({
  team: state.teams[ownProps.params.teamId],
  puzzles: state.puzzles,
  messages: state.messages,
  scheduleEvents: state.scheduleEvents
});

const mapDispatchToProps = dispatch => ({
  requestTeam: id => dispatch(requestTeam(id)),
  requestUnsolvedPuzzles: id => dispatch(requestTeamPuzzles({
    team_id: id,
    solved: false
  })),
  requestMessages: id => dispatch(requestMessages(id)),
  requestScheduleEvents: id => dispatch(requestScheduleEvents({
    team_id: id,
    filter_by: "future"
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamHome);
