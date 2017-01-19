import React from 'react';
import {Link} from 'react-router';
import MembersIcons from '../user_home/members_icons';

class MessageIndexItem extends React.Component {
  render() {
    const {message, message: {author}} = this.props;
    return (
      <li className="partial-index-item">
        <Link to={`/teams/${message.team_id}/messages/${message.id}`}>
          <div className="item-info">
            <div className="item-header">
              <h4>{message.title}</h4>
              <h6>{`${message.body.substring(0, 120)}...`}</h6>
            </div>
            <span>
              <h4>- </h4>
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
