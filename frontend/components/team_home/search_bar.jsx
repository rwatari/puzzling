import React from 'react';
import Select from 'react-select';
import {queryUsers} from '../../util/team_api_util';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {username: '', userId: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMembership({
      user_id: this.state.userId,
      team_id: this.props.team.id
    }).then(
      () => this.setState({username: '', userId: null})
    );
  }

  handleChange(val) {
    this.setState({username: val.username, userId: val.id});
  }

  getOptions(input) {
    return queryUsers({
      string: input,
      team_id: this.props.team.id
    }).then(options => (
      (options.length > 0) ? {options} : null
    ));
  }

  render() {
    return (
      <div>
        <form className="user-search"
          onSubmit={this.handleSubmit}>
          <Select.Async
            name="user-search-select"
            value={this.state.userId}
            loadOptions={this.getOptions}
            onChange={this.handleChange}
            clearable={false}
            autosize={false}
            onBlurResetsInput={false}
            valueKey="id"
            labelKey="username"
            placeholder="Search for users..."
          />
          <input type="submit" value="Add!"/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
