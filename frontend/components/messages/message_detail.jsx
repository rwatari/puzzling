import React from 'react';
import MessageFormContainer from './message_form_container';

class MessageDetail extends React.Component {
  constructor() {
    super();
    this.state = {showForm: false};
    this.toggleForm = this.toggleForm.bind(this);
  }

  componentDidMount() {
    this.props.requestMessage(this.props.params.messageId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.messageId !== this.props.params.messageId) {
      this.props.requestMessage(newProps.params.messageId);
    }
  }

  toggleForm() {
    this.setState({showForm: !this.state.showForm});
  }

  render() {
    const {message, currentUser} = this.props;
    if (this.state.showForm) {
      return <MessageFormContainer message={message} toggleForm={this.toggleForm}/>;
    } else if (message) {
      const {author} = message;
      let editButton;
      if (author.id === currentUser.id) {
        editButton = (
          <nav className="detail-nav">
            <ul>
              <li>
                <button className="active-button" onClick={this.toggleForm}>
                  <h4>Edit</h4>
                </button>
              </li>
            </ul>
          </nav>
        );
      }
      return (
        <div className="detail-view">
          <div className="detail-header">
            <div className="detail-header-text">
              <h3>Message:</h3>
              <h4>{message.title}</h4>
            </div>
            {editButton}
          </div>
          <br />
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
