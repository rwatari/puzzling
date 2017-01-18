import React from 'react';
import TeamIndexContainer from './team_index_container';
import UserPuzzleIndexContainer from './user_puzzle_index_container';

class UserHome extends React.Component {
  render() {
    return (
      <div className="main-content">
        <TeamIndexContainer />
        <UserPuzzleIndexContainer />
      </div>
    );
  }
}

export default UserHome;
