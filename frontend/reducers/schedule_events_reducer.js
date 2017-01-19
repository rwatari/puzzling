import {
  RECEIVE_SCHEDULE_EVENTS,
  RECEIVE_SCHEDULE_EVENT
} from '../actions/schedule_event_actions';
import merge from 'lodash/merge';

const ScheduleEventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SCHEDULE_EVENTS:
      return action.scheduleEvents;
    case RECEIVE_SCHEDULE_EVENT:
      return merge({}, state, {[action.scheduleEvent.id]: action.scheduleEvent});
    default:
      return state;
  }
};

export default ScheduleEventsReducer;
