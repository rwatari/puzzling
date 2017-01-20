import {connect} from 'react-redux';
import {createMessage, updateMessage} from '../../actions/message_actions';
import MessageForm from './message_form';

const mapStateToProps = state => ({
  errors: state.formErrors.message
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = (ownProps.message) ? updateMessage : createMessage;

  return {
    processForm: message => dispatch(processForm(message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
