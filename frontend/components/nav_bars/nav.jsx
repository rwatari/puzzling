import React from 'react';
import {withRouter, Link} from 'react-router';
import FontAwesome from 'react-fontawesome';

class Nav extends React.Component {
  constructor() {
    super();
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    this.props.logout();
    this.props.router.push("/");
  }

  render() {
    return (
      <nav className="user-nav">
        <div className="logo">
          <Link to="/home">
            <h1>Puzzling!</h1>
            <FontAwesome name='home' size='2x' />
          </Link>
        </div>
        <div>
          <ul className="user-nav-options">
            <li>
              <h3>Hello {this.props.currentUser.username}!</h3>
            </li>
            <li>
              <button className="active-button" onClick={this.handleLogOut}>Log Out</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
