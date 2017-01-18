import React from 'react';
import {Link} from 'react-router';
import MembersIcons from './members_icons';

const PuzzleIndexItem = ({puzzle, team}) => {
  let title;
  if (puzzle.title.length > 30) {
    title = `${puzzle.title.slice(0, 25)}...`;
  } else {
    title = puzzle.title;
  }

  let linkUrl, huntName;
  if (team) {
    linkUrl = `/teams/${team.id}/puzzles/${puzzle.id}`;
    huntName = team.hunt_name;
  } else {
    linkUrl = huntName = '';
  }

  return(
    <li className="item-card">
      <Link to={linkUrl}>
        <div className="item-card-headers">
          <h4>
            {title}
          </h4>
          <h5>
            From {huntName}
          </h5>
        </div>
        <MembersIcons members={puzzle.solvers}/>
      </Link>
    </li >
  );
};

export default PuzzleIndexItem;
