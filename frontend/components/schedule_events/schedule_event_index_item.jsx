import React from 'react';
import {Link} from 'react-router';

class ScheduleEventIndexItem extends React.Component {
  render() {
    const {scheduleEvent} = this.props;
    return (
      <li className="partial-index-item">
        <Link to={`/teams/${scheduleEvent.team_id}/schedule/${scheduleEvent.id}`}>
          <div className="item-info">
            <div className="item-header">
              <h4>{scheduleEvent.title}</h4>
              <h6>{`${scheduleEvent.description.substring(0, 120)}...`}</h6>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default ScheduleEventIndexItem;
