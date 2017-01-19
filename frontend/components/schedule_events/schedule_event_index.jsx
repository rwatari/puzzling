import React from 'react';
import {isEmpty} from 'lodash';
import {Link} from 'react-router';
import ScheduleEventIndexItem from './schedule_event_index_item';

class ScheduleEventIndex extends React.Component {
  constructor() {
    super();
    this.state = {activeTab: "future"};
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  componentDidMount() {
    this.props.requestFutureEvents(this.props.params.teamId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location.pathname !== this.props.location.pathname) {
      this.props.requestFutureEvents(newProps.params.teamId);
    }
  }

  handleTabClick(property) {
    const {teamId} = this.props.params;
    return () => {
      if (this.state.activeTab !== property) {
        this.setState({activeTab: property});
        if (property === "future") {
          this.props.requestFutureEvents(teamId);
        } else {
          this.props.requestPastEvents(teamId);
        }
      }
    };
  }

  render() {
    const {
      scheduleEvents,
      requestFutureEvents,
      requestPastEvents
    } = this.props;

    let mainContent;
    if (isEmpty(scheduleEvents)) {
      mainContent = (
        <div className="team-partial-content">
          <h3>No Events!</h3>
        </div>
      );
    } else {
      mainContent = (
        <ul className="team-partial-content">
          {Object.keys(scheduleEvents).map(id => (
            <ScheduleEventIndexItem key={id}
              scheduleEvent={scheduleEvents[id]}/>
          ))}
        </ul>
      );
    }

    return (
      <div className="team-partial">
        <h3>Schedule</h3>
        <Link to={`/teams/${this.props.params.teamId}/new-event`}>
          <h4>Add an Event</h4>
        </Link>
        <nav className="tab-index-nav">
          <ul>
            <li className={(this.state.activeTab === "future") ? "active-tab" : "inactive-tab"}
              onClick={this.handleTabClick("future")}>
              <h4>Upcoming Events</h4>
            </li>
            <li className={(this.state.activeTab === "past") ? "active-tab" : "inactive-tab"}
              onClick={this.handleTabClick("past")}>
              <h4>Past Events</h4>
            </li>
          </ul>
        </nav>
        {mainContent}
      </div>
    );
  }
}

export default ScheduleEventIndex;
