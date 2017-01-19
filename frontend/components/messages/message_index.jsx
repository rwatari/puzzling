import React from 'react';
import {isEmpty} from 'lodash';
import {Link} from 'react-router';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component {
  componentDidMount() {
    this.props.requestMessages(this.props.params.teamId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location.pathname !== this.props.location.pathname) {
      this.props.requestMessages(newProps.params.teamId);
    }
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
        <Link to={`/teams/${this.props.params.teamId}/new-message`}>
          <h4>Add a message</h4>
        </Link>
        {mainContent}
      </div>
    );
  }
}

export default MessageIndex;
