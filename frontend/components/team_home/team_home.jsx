import React from 'react';
import {withRouter, Link} from 'react-router';
import {isEmpty} from 'lodash';
import SearchBarContainer from './search_bar_container';

class TeamHome extends React.Component {
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
    const {team} = this.props;
    return isEmpty(team) ? <div></div> :
    (
      <div className="main-content">
        <div className="card-group">
          <h3>{team.name}</h3>
          <label className="team-invite">
            <h4>Invite people to the team</h4>
            <SearchBarContainer team={team}/>
          </label>
          <ul className="card-container">
            <li className="item-card">
              <Link to={`/teams/${team.id}/messages`}>
                <h4>Message Board</h4>
              </Link>
            </li>
            <li className="item-card">
              <Link to={`/teams/${team.id}/puzzles`}>
                <h4>Puzzles</h4>
              </Link>
            </li>
            <li className="item-card">
              <Link to={`/teams/${team.id}/schedule`}>
                <h4>Schedule</h4>
              </Link>
            </li>
          </ul>
        </div>
        <div className="team-members">
          <h3>Team members</h3>
          <ul>
            {team.members.map(member => (
              <li key={member.id}>{member.username}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(TeamHome);
