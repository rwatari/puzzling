import {connect} from 'react-redux';
import {requestScheduleEvent} from '../../actions/schedule_event_actions';
import ScheduleEventDetail from './schedule_event_detail';

const mapStateToProps = (state, ownProps) => ({
  scheduleEvent: state.scheduleEvents[ownProps.params.scheduleEventId]
});

const mapDispatchToProps = dispatch => ({
  requestScheduleEvent: id => dispatch(requestScheduleEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleEventDetail);
