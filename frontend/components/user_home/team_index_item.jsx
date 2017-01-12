import React from 'react';
import {Link} from 'react-router';

const TeamIndexItem = props => (
  <li className="item-card">
    <Link to={`/teams/${props.team.id}`}>
      This is team {props.team.name}
    </Link>
  </li >
);

export default TeamIndexItem;
