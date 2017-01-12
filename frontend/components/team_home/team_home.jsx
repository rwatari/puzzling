import React from 'react';
import {withRouter} from 'react-router';
import {isEmpty} from 'lodash';

class TeamHome extends React.Component {
  componentDidMount() {
    if (isEmpty(this.props.team)) {
      this.props.requestTeam().fail(
        err => this.redirectToHome()
      );
    }
  }

  redirectToHome () {
    this.props.router.push('/home');
  }

  render() {
    return isEmpty(this.props.team) ? <div></div> :
    (
      <div className="main-content">
        <div className="card-group">
          <h3>{this.props.team.name}</h3>
        </div>
      </div>
    );
  }
}

export default withRouter(TeamHome);
