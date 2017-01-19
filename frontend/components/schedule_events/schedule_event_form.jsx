import React from 'react';
import {withRouter} from 'react-router';
import Datetime from 'react-datetime';

class ScheduleEventForm extends React.Component {
  constructor() {
    super();
    this.state = {title: '', description: '', startDateTime: '', endDateTime: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleCalendarChange = this.handleCalendarChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validDateRange = this.validDateRange.bind(this);
  }

  handleChange(property) {
    return e => {
      this.setState({[property]: e.target.value});
    };
  }

  handleCalendarChange(property) {
    return moment => {
      this.setState({[property]: moment});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const {title, description, startDateTime, endDateTime} = this.state;
    const {teamId} = this.props.params;
    this.props.createScheduleEvent({
      title,
      description,
      start_datetime: startDateTime.toISOString(),
      end_datetime: endDateTime.toISOString(),
      team_id: teamId
    }).then(
      scheduleEvent => {
        this.props.router.push(
          `/teams/${teamId}/schedule/${scheduleEvent.id}`
        );
      }
    );
  }

  validDateRange(current) {
    return current.isSameOrAfter(this.state.startDateTime);
  }

  render() {
    const errorList =
    (<ul>
      {this.props.errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>);
    return (
      <div className="team-partial">
        <h3>Add an Event</h3>
        <div className="team-partial-content">
          <form onSubmit={this.handleSubmit}>
            <label>
              <h4>Title:</h4>
            </label>
            <input type="text"
              onChange={this.handleChange("title")}
              value={this.state.title}/>
            <label>
              <h4>Description:</h4>
            </label>
            <textarea onChange={this.handleChange("description")}
              value={this.state.description}/>
            <div className="form-calendars">
              <label>
                <h4>Start Date and Time</h4>
                <Datetime
                  value={this.state.startDateTime}
                  onChange={this.handleCalendarChange("startDateTime")}
                  open={true}
                  closeOnTab={false}
                  disableOnClickOutside={true}/>
              </label>
              <label>
                <h4>End Date and Time</h4>
                <Datetime
                  value={this.state.endDateTime}
                  onChange={this.handleCalendarChange("endDateTime")}
                  open={true}
                  closeOnTab={false}
                  disableOnClickOutside={true}
                  isValidDate={this.validDateRange}/>
              </label>

            </div>
            <br />
            {errorList}
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(ScheduleEventForm);
