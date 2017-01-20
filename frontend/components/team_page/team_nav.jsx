import React from 'react';
import {Link, withRouter} from 'react-router';

const TeamNav = ({team, location, router}) => {
  const handleClick = path => e => {
    e.preventDefault();
    router.push(`/teams/${team.id}/${path}`);
  };

  const classNamer = path => (
    location.pathname.includes(path) ? 'active-button active' : 'active-button'
  );

  if (team) {
    return (
      <nav className="team-nav">
        <Link to={`/teams/${team.id}`}>
          <h3>{team.name}</h3>
        </Link>
        <ul className="team-nav-options">
          <li>
            <button onClick={handleClick("messages")}
              className={classNamer('message')}>
              <h4>Messages</h4>
            </button>
          </li>
          <li>
            <button onClick={handleClick("puzzles")}
              className={classNamer('puzzle')}>
              <h4>Puzzles</h4>
            </button>
          </li>
          <li>
            <button onClick={handleClick("schedule")}
              className={classNamer('schedule')}>
              <h4>Schedule</h4>
            </button>
          </li>
        </ul>
      </nav>
    );
  } else {
    return <div></div>;
  }
};

export default withRouter(TeamNav);
