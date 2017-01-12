import React from 'react';
import TeamIndexItem from './team_index_item';
import {isEmpty} from 'lodash';

class TeamIndex extends React.Component {
  constructor() {
    super();
    this.state = {formShown: false, name: '', hunt: ''};
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (isEmpty(this.props.teams)) {
      this.props.requestTeams();
    }
  }

  showForm() {
    this.setState({formShown: true});
  }

  hideForm() {
    this.setState({formShown: false});
  }

  resetForm() {
    this.setState({formShown: false, name: '', hunt: ''});
  }

  handleChange(property) {
    return e => {
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTeam({
      name: this.state.name,
      hunt_name: this.state.hunt
    }).then(this.resetForm);
  }

  render() {
    const {teams} = this.props;
    const teamItems = Object.keys(teams).map(id => (
      <TeamIndexItem key={id} team={teams[id]}/>
    ));

    let formItem;
    if (this.state.formShown) {
      formItem = (
        <li key="form"
          className="item-card">
          <form onSubmit={this.handleSubmit} className="card-form">
            <label>
              <h5>Team name:</h5>
              <input type="text"
                value={this.state.name}
                onChange={this.handleChange("name")}/>
            </label>
            <label>
              <h5>Hunt name:</h5>
              <input type="text"
                value={this.state.hunt}
                onChange={this.handleChange("hunt")}/>
            </label>
            <input type="submit" value="Add team!"/>
            <button onClick={this.hideForm}>Cancel</button>
          </form>
        </li>
      );
    } else {
      formItem = (
        <li key="form"
          className="item-card add-card"
          onClick={this.showForm}>
          <h4>Add a Team</h4>
        </li>
      );
    }

    return (
      <ul className="card-container">
        {formItem}
        {teamItems}
      </ul>
    );
  }
}

export default TeamIndex;
