import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {username: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({username: e.target.value});
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
      </form>
    );
  }
}

export default SearchBar;
