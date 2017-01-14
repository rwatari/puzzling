import React from 'react';
import {Link} from 'react-router';
import MembersIcons from './members_icons';

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
        <div className="item-card-headers">
          <h4>
            {name}
          </h4>
          <h5>
            {team.hunt_name}
          </h5>
        </div>
        <MembersIcons members={team.members}/>
      </Link>
    </li >
  );
};

export default TeamIndexItem;
