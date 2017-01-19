import {connect} from 'react-redux';
import {createScheduleEvent} from '../../actions/schedule_event_actions';
import ScheduleEventForm from './schedule_event_form';

const mapStateToProps = state => ({
  errors: state.formErrors.scheduleEvent
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createScheduleEvent: scheduleEvent => dispatch(createScheduleEvent(scheduleEvent))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleEventForm);
