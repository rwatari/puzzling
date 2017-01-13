import React from 'react';
import TeamIndexItem from './team_index_item';
import TeamForm from './team_form';
import {isEmpty} from 'lodash';

class TeamIndex extends React.Component {
  constructor() {
    super();
    this.state = {formShown: false};
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  componentDidMount() {
    this.props.requestTeams();
  }

  showForm() {
    this.setState({formShown: true});
  }

  hideForm(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({formShown: false});
  }

  render() {
    const {teams, errors, createTeam} = this.props;
    const teamItems = Object.keys(teams).map(id => (
      <TeamIndexItem key={id} team={teams[id]}/>
    ));

    let formItem;
    if (this.state.formShown) {
      formItem = (
        <TeamForm
          errors={errors}
          createTeam={createTeam}
          hideForm={this.hideForm}/>
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
        {teamItems.reverse()}
      </ul>
    );
  }
}

export default TeamIndex;
