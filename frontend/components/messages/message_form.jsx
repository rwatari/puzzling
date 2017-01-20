import React from 'react';
import {withRouter} from 'react-router';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.message) {
      this.state = {
        title: props.message.title,
        body: props.message.body,
        id: props.message.id
      };
    } else {
      this.state = {title: '', body: ''};
    }

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
    const {
      processForm,
      params: {teamId},
      router,
      toggleForm
    } = this.props;
    processForm(
      Object.assign({}, this.state, {team_id: teamId})
    ).then(
      message => {
        if (toggleForm) {
          toggleForm();
        } else {
          router.push(`/teams/${teamId}/messages/${message.id}`);
        }
      }
    );
  }

  render() {
    const {errors, message, toggleForm} = this.props;
    const errorList =
    (<ul>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>);

    let backToDetail;
    if (message) {
      backToDetail = (
        <button onClick={toggleForm}>
          <h4>...back to Message</h4>
        </button>
      );
    }

    return (
      <div className="team-partial">
        <h3>{(message) ? "Update Message" : "Add a message"}</h3>
        {backToDetail}
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
