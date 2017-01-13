import React from 'react';
import Select from 'react-select';
import {queryUsers} from '../../util/team_api_util';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {username: '', user_id: null};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMembership({
      user_id: this.state.user_id,
      team_id: this.props.team.id
    }).then(
      () => this.setState({username: '', user_id: null})
    );
  }

  handleChange(val) {
    this.setState({username: val.label, user_id: val.value});
  }

  handleInputChange(val) {
    this.setState({username: val});
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
            value={this.state.user_id}
            loadOptions={this.getOptions}
            onInputChange={this.handleInputChange}
            onChange={this.handleChange}
            clearable={false}
            autoload={false}
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

// options={this.props.userSearchResults.map(result => (
//   {
//     value: result.id,
//     label: result.username
//   }
// ))}
