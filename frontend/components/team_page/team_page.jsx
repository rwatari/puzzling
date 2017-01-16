import React from 'react';
import TeamHomeContainer from '../team_home/team_home_container';

const TeamPage = props => {
  if (props.children) {
    return (
      <div>
        {props.children}
      </div>
    );
  }
  else {
    return <TeamHomeContainer props={props}/>;
  }
};

export default TeamPage;
