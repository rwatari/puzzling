import React from 'react';
import {withRouter, Link} from 'react-router';
import {isEmpty} from 'lodash';
import SearchBarContainer from './search_bar_container';
import ScrollingPreview from './scrolling_preview';

class TeamHome extends React.Component {
  componentDidMount() {
    const {
      team,
      requestTeam,
      requestUnsolvedPuzzles,
      requestMessages,
      params} = this.props;

    if (isEmpty(team)) {
      requestTeam(params.teamId).fail(
        err => this.redirectToHome()
      );
    }
    requestUnsolvedPuzzles(params.teamId);
    requestMessages(params.teamId);
  }

  componentWillReceiveProps(newProps) {
    const {
      team,
      location,
      requestUnsolvedPuzzles,
      requestTeam,
      requestMessages,
    } = this.props;
    if (location.pathname !== newProps.location.pathname || isEmpty(team)) {
      const newId = newProps.params.teamId;
      requestTeam(newId);
      requestUnsolvedPuzzles(newId);
      requestMessages(newId);
    }
  }

  redirectToHome () {
    this.props.router.push('/home');
  }

  render() {
    const {team, puzzles, messages} = this.props;
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
                <ScrollingPreview
                  header="Message Board"
                  content={messages}
                  noContentMessage="No messages!"/>
              </Link>
            </li>
            <li className="item-card">
              <Link to={`/teams/${team.id}/puzzles`}>
                <ScrollingPreview
                  header="Puzzles"
                  content={puzzles}
                  noContentMessage="No unsolved puzzles!"/>
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
            {Object.keys(team.members).map(id => (
              <li key={id}>{team.members[id].username}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(TeamHome);
