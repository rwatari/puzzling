import * as ScheduleEventUtil from '../util/schedule_event_api_util';
import {receiveScheduleEventErrors} from './form_error_actions';

export const RECEIVE_SCHEDULE_EVENTS = 'RECEIVE_SCHEDULE_EVENTS';
export const RECEIVE_SCHEDULE_EVENT = 'RECEIVE_SCHEDULE_EVENT';

// object actions

export const receiveScheduleEvents = scheduleEvents => ({
  type: RECEIVE_SCHEDULE_EVENTS,
  scheduleEvents
});

export const receiveScheduleEvent = scheduleEvent => ({
  type: RECEIVE_SCHEDULE_EVENT,
  scheduleEvent
});

// thunks

export const requestScheduleEvents = query => dispatch => (
  ScheduleEventUtil.fetchScheduleEvents(query).then(
    scheduleEvents => dispatch(receiveScheduleEvents(scheduleEvents))
  )
);

export const requestScheduleEvent = id => dispatch => (
  ScheduleEventUtil.fetchScheduleEvent(id).then(
    scheduleEvent => dispatch(receiveScheduleEvent(scheduleEvent))
  )
);

export const createScheduleEvent = scheduleEvent => dispatch => (
  ScheduleEventUtil.createScheduleEvent(scheduleEvent).then(
    newScheduleEvent => {
      dispatch(receiveScheduleEvent(newScheduleEvent));
      return newScheduleEvent;
    },
    err => dispatch(receiveScheduleEventErrors(err.responseJSON))
  )
);
