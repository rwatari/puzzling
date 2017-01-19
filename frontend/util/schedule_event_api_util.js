export const fetchScheduleEvents = query => (
  $.ajax({
    method: 'GET',
    url: 'api/schedule_events',
    data: {query}
  })
);

export const fetchScheduleEvent = id => (
  $.ajax({
    method: 'GET',
    url: `api/schedule_events/${id}`
  })
);

export const createScheduleEvent = schedule_event => (
  $.ajax({
    method: 'POST',
    url: 'api/schedule_events',
    data: {schedule_event}
  })
);
