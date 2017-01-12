import React from 'react';
import {Link} from 'react-router';

const TeamIndexItem = ({team}) => {
  let name;
  if (team.name.length > 30) {
    name = `${team.name.slice(0, 25)}...`;
  } else {
    name = team.name;
  }

  return(
    <li className="item-card">
      <Link to={`/teams/${team.id}`}>
        <h4>
          {name}
        </h4>
        <h5>
          {team.hunt_name}
        </h5>
      </Link>
    </li >
  );
};

export default TeamIndexItem;
