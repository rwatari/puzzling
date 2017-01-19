import {connect} from 'react-redux';
import {requestMessage} from '../../actions/message_actions';
import MessageDetail from './message_detail';

const mapStateToProps = (state, ownProps) => ({
  message: state.messages[ownProps.params.messageId]
});

const mapDispatchToProps = dispatch => ({
  requestMessage: id => dispatch(requestMessage(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageDetail);
