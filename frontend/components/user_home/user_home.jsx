import React from 'react';

class UserHome extends React.Component {
  render() {
    return (
      <div className="main-content">
        <div className="user-teams">
          <h3>Teams</h3>
          <ul className="team-list"></ul>
        </div>
      </div>
    );
  }
}

export default UserHome;
