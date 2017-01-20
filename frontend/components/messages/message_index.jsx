import React from 'react';
import {isEmpty} from 'lodash';
import {withRouter} from 'react-router';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component {
  componentDidMount() {
    this.props.requestMessages(this.props.params.teamId);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location.pathname !== this.props.location.pathname) {
      this.props.requestMessages(newProps.params.teamId);
    }
  }

  handleButtonClick(e) {
    e.preventDefault();
    this.props.router.push(`/teams/${this.props.params.teamId}/new-message`);
  }

  render() {
    const {
      messages,
      requestMessages,
      currentUser
    } = this.props;

    let mainContent;
    if (isEmpty(messages)) {
      mainContent = (
        <div className="team-partial-content">
          <h3>No messages!</h3>
        </div>
      );
    } else {
      mainContent = (
        <ul className="team-partial-content">
          {Object.keys(messages).map(id => (
            <MessageIndexItem key={id}
              message={messages[id]}
              currentUser={currentUser}/>
          ))}
        </ul>
      );
    }

    return (
      <div className="team-partial">
        <h3>Messages</h3>
        <button onClick={this.handleButtonClick}
          className="active-button">
          <h4>Add a message</h4>
        </button>
        <br />
        {mainContent}
      </div>
    );
  }
}

export default withRouter(MessageIndex);
