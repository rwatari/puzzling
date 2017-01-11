import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, signup} from '../../actions/session_actions';

const mapStateToProps = ({currentUser, formErrors: {session}}) => ({
  loggedIn: Boolean(currentUser),
  errors: session
});

const mapDispatchToProps = (dispatch, {formType}) => {
  const processForm = (formType === 'login') ? login : signup;

  return { processForm: user => dispatch(processForm(user)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
