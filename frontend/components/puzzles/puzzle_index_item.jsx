import React from 'react';

const PuzzleIndexItem = ({puzzle}) => {

  return (
    <li>
      <h4>{puzzle.title}</h4>
      <h6>{`${puzzle.description.substring(0, 40)}...`}</h6>
    </li>
  );
};

export default PuzzleIndexItem;
