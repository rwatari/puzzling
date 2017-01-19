import React from 'react';
import moment from 'moment';

class ScheduleEventDetail extends React.Component {
  componentDidMount() {
    this.props.requestScheduleEvent(this.props.params.scheduleEventId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.scheduleEventId !== this.props.params.scheduleEventId) {
      this.props.requestScheduleEvent(newProps.params.scheduleEventId);
    }
  }


  render() {
    const {scheduleEvent} = this.props;
    if (scheduleEvent) {
      const startTime = moment(scheduleEvent.start_datetime)
        .format("dddd, MMMM Do YYYY, h:mm a");

      const endTime = moment(scheduleEvent.end_datetime)
        .format("dddd, MMMM Do YYYY, h:mm a");

      return (
        <div className="detail-view">
          <div className="detail-header">
            <div className="detail-header-text">
              <h3>Event:</h3>
              <h4>{scheduleEvent.title}</h4>
              <h3>Start:</h3>
              <h4>{startTime}</h4>
              <h3>End:</h3>
              <h4>{endTime}</h4>
            </div>
          </div>
          <h3>Description:</h3>
          <p>{scheduleEvent.description}</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default ScheduleEventDetail;
