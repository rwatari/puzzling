import {connect} from 'react-redux';
import {searchUsers} from '../../actions/team_actions';
import SearchBar from './search_bar';

const mapStateToProps = ({userSearchResults}) => ({userSearchResults});

const mapDispatchToProps = dispatch => ({
  searchUsers: query => dispatch(searchUsers(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
