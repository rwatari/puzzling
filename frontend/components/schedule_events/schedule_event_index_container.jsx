import {connect} from 'react-redux';
import {
  requestScheduleEvents,
  createScheduleEvent
} from '../../actions/schedule_event_actions';
import ScheduleEventIndex from './schedule_event_index';

const mapStateToProps = state => ({
  scheduleEvents: state.scheduleEvents
});

const mapDispatchToProps = dispatch => ({
  requestPastEvents: teamId => dispatch(requestScheduleEvents({
    team_id: teamId,
    filter_by: "past"
  })),
  requestFutureEvents: teamId => dispatch(requestScheduleEvents({
    team_id: teamId,
    filter_by: "future"
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleEventIndex);
