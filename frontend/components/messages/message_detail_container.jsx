import {connect} from 'react-redux';
import {requestMessage, deleteMessage} from '../../actions/message_actions';
import MessageDetail from './message_detail';

const mapStateToProps = (state, ownProps) => ({
  message: state.messages[ownProps.params.messageId],
  currentUser: state.session
});

const mapDispatchToProps = dispatch => ({
  requestMessage: id => dispatch(requestMessage(id)),
  deleteMessage: id => dispatch(deleteMessage(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageDetail);
