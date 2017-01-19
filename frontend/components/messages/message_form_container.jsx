import {connect} from 'react-redux';
import {createMessage} from '../../actions/message_actions';
import MessageForm from './message_form';

const mapStateToProps = state => ({
  errors: state.formErrors.message
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createMessage: message => dispatch(createMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
