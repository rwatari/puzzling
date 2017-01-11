import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import SplashPageNav from './splash_page_nav';

const mapDispatchToProps = dispatch => ({
  loginAsGuest: () => dispatch(login({
    username: "guest",
    password: "helloworld"
  }))
});

export default connect(null, mapDispatchToProps)(SplashPageNav);
