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
          <li>
            <Link to={`/teams/${team.id}/messages`} activeClassName="active">
              <h4>Messages</h4>
            </Link>
          </li>
          <li>
            <Link to={`/teams/${team.id}/puzzles`} activeClassName="active">
              <h4>Puzzles</h4>
            </Link>
          </li>
          <li>
            <Link to={`/teams/${team.id}/schedule`} activeClassName="active">
              <h4>Schedule</h4>
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return <div></div>;
  }
};

export default TeamNav;
