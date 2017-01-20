import React from 'react';
import {withRouter} from 'react-router';

class MessageForm extends React.Component {
  constructor() {
    super();
    this.state = {title: '', body: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property) {
    return e => {
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const {title, body} = this.state;
    const {teamId} = this.props.params;
    this.props.createMessage({
      title,
      body,
      team_id: teamId
    }).then(
      message => {
        this.props.router.push(`/teams/${teamId}/messages/${message.id}`);
      }
    );
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
        <h3>Add a Message</h3>
        <div className="team-partial-content">
          <form onSubmit={this.handleSubmit}>
            <label>
              <h4>Title:</h4>
            </label>
            <input type="text"
              onChange={this.handleChange("title")}
              value={this.state.title}/>
            <label>
              <h4>Body:</h4>
            </label>
            <textarea onChange={this.handleChange("body")}
              value={this.state.body}/>
            <br />
            {errorList}
            <input className="active-button"
              type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(MessageForm);
