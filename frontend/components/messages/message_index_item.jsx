import React from 'react';
import {Link} from 'react-router';
import moment from 'moment';

class MessageIndexItem extends React.Component {
  render() {
    const {message, message: {author}} = this.props;
    let bodySnippet;
    if (message.body.length > 120) {
      bodySnippet = `${message.body.substring(0, 120)}...`;
    } else {
      bodySnippet = message.body;
    }
    return (
      <li className="partial-index-item">
        <Link to={`/teams/${message.team_id}/messages/${message.id}`}>
          <div className="item-info">
            <div className="item-header">
              <h4>{message.title}</h4>
              <h6>{bodySnippet}</h6>
            </div>
            <span>
              <h5>{moment(message.created_at).fromNow()}</h5>
              <h4>&nbsp;by</h4>
              <div className="user-icon-small"
                title={author.username}
                alt={author.username}
                key={author.id}>
                <h5>{author.username[0]}</h5>
              </div>
              <h4>{author.username}</h4>
            </span>
          </div>
        </Link>
      </li>
    );
  }
}

export default MessageIndexItem;
