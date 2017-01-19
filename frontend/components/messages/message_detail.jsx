import React from 'react';

class MessageDetail extends React.Component {
  componentDidMount() {
    this.props.requestMessage(this.props.params.messageId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.messageId !== this.props.params.messageId) {
      this.props.requestMessage(newProps.params.messageId);
    }
  }


  render() {
    const {message} = this.props;
    if (message) {
      const {author} = message;
      return (
        <div className="detail-view">
          <div className="detail-header">
            <div className="detail-header-text">
              <h3>Message:</h3>
              <h4>{message.title}</h4>
            </div>
          </div>
          <p>{message.body}</p>
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
      );
    } else {
      return <div></div>;
    }
  }
}

export default MessageDetail;
