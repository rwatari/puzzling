import React from 'react';
import {isEmpty} from 'lodash';
import TeamNav from './team_nav';

class TeamPage extends React.Component {
  componentDidMount() {
    if (isEmpty(this.props.team)) {
      this.props.requestTeam().fail(
        err => this.redirectToHome()
      );
    }
  }

  redirectToHome () {
    this.props.router.push('/home');
  }

  render() {
    const {team, children} = this.props;
    return (
      <div className="main-content">
        <TeamNav team={team}/>
        {children}
      </div>
    );
  }
}

export default TeamPage;
