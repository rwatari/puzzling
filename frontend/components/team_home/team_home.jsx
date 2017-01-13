import React from 'react';
import {withRouter} from 'react-router';
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
            <SearchBarContainer />
          </label>
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
