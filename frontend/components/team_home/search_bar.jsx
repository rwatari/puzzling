import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {username: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({username: e.target.value},
      () => this.props.searchUsers(this.state.username)
    );
  }

  render() {
    return (
      <form className="user-search">
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="Find other users..."
          />
        <input type="submit" value="Add" />
        <ul>
          {this.props.userSearchResults.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </form>
    );
  }
}

export default SearchBar;
