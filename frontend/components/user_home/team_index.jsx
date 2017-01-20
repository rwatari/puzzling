import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
        <li key="form-button"
          className="item-card add-card"
          onClick={this.showForm}>
          <h4>Add a Team</h4>
        </li>
      );
    }

    return (
      <div className="card-group">
        <h2>Teams</h2>
        <ul className="card-container">
          <ReactCSSTransitionGroup
            className="animation-switch"
            transitionName="team-form-switch"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            {formItem}
          </ReactCSSTransitionGroup>
          {teamItems.reverse()}
        </ul>
      </div>
    );
  }
}

export default TeamIndex;
