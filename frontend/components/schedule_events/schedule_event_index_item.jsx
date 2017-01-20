import React from 'react';
import {Link} from 'react-router';
import moment from 'moment';

class ScheduleEventIndexItem extends React.Component {
  render() {
    const {scheduleEvent} = this.props;

    let snippet;
    if (scheduleEvent.description.length > 120) {
      snippet = `${scheduleEvent.description.substring(0, 120)}...`;
    } else {
      snippet = scheduleEvent.description;
    }

    const date = moment(scheduleEvent.start_datetime).format("MMM Do, YYYY");

    return (
      <li className="partial-index-item">
        <Link to={`/teams/${scheduleEvent.team_id}/schedule/${scheduleEvent.id}`}>
          <div className="item-info">
            <div className="item-header">
              <h4>{date}</h4>
              <h4>{scheduleEvent.title}</h4>
              <h6>{snippet}</h6>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default ScheduleEventIndexItem;
