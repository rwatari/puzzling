import {connect} from 'react-redux';
import {createMembership} from '../../actions/team_actions';
import SearchBar from './search_bar';

const mapStateToProps = ({userSearchResults}) => ({userSearchResults});

const mapDispatchToProps = dispatch => ({
  createMembership: membership => dispatch(createMembership(membership))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
