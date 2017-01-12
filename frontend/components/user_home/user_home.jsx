import React from 'react';
import TeamIndexContainer from './team_index_container';

class UserHome extends React.Component {
  render() {
    return (
      <div className="main-content">
        <div className="card-group">
          <h3>Teams</h3>
          <TeamIndexContainer />
        </div>
      </div>
    );
  }
}

export default UserHome;
