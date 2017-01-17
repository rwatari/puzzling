import React from 'react';
import {Link} from 'react-router';

const TeamNav = ({team}) => {
  if (team) {
    return (
      <nav className="team-nav">
        <Link to={`/teams/${team.id}`}>
          <h3>{team.name}</h3>
        </Link>
        <ul className="team-nav-options">
          <Link to={`/teams/${team.id}/messages`} activeClassName="active">
            <li><h4>Messages</h4></li>
          </Link>
          <Link to={`/teams/${team.id}/puzzles`} activeClassName="active">
            <li><h4>Puzzles</h4></li>
          </Link>
          <Link to={`/teams/${team.id}/schedule`} activeClassName="active">
            <li><h4>Schedule</h4></li>
          </Link>
        </ul>
      </nav>
    );
  } else {
    return <div></div>;
  }
};

export default TeamNav;
