import {connect} from 'react-redux';
import UserHome from './user_home';

const mapStateToProps = state => ({
  currentUser: state.session
});

export default connect(mapStateToProps)(UserHome);
