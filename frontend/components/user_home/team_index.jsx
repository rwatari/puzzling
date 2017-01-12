import React from 'react';
import TeamIndexItem from './team_index_item';
import {isEmpty} from 'lodash';

class TeamIndex extends React.Component {
  constructor() {
    super();
    this.state = {extraItems: 0};
    this.handleExtra = this.handleExtra.bind(this);
  }

  componentDidMount() {
    if (isEmpty(this.props.teams)) {
      this.props.requestTeams();
    }
  }

  handleExtra() {
    this.setState({extraItems: this.state.extraItems + 1});
  }

  render() {
    const {teams} = this.props;
    const teamItems = Object.keys(teams).map(id => (
      <TeamIndexItem key={id} team={teams[id]}/>
    ));

    const moreItems = [];
    for (let i = 0; i < this.state.extraItems; i++) {
      moreItems.push(
        <li
          key={`extra${i}`}
          className="item-card"
          >This is extra {i}</li>);
    }

    return (
      <ul className="card-container">
        <li
          key="form"
          className="item-card"
          onClick={this.handleExtra}>+</li>
        {teamItems}
        {moreItems}
      </ul>
    );
  }
}

export default TeamIndex;
