import {connect} from 'react-redux';
import {requestMessages} from '../../actions/message_actions';
import MessageIndex from './message_index';

const mapStateToProps = state => ({
  messages: state.messages,
  currentUser: state.session
});

const mapDispatchToProps = dispatch => ({
  requestMessages: teamId => dispatch(requestMessages(teamId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);
