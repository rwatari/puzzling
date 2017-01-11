import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

class SplashPageNav extends React.Component {
  constructor() {
    super();
    this.state = {formType: "login"};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({formType: e.target.value});
  }

  render() {
    return (
      <nav>
        <div className="logo">
          Logo and "Puzzling" goes here
        </div>
        <div>
          <ul className="splash-nav-session">
            <li>
              <button onClick={this.handleClick}
                value="signup">Sign up</button>
            </li>
            <li>
              <button onClick={this.handleClick}
                value="login">Log In</button>
            </li>
          </ul>
        </div>
        <div className="session-form">
          <SessionFormContainer formType={this.state.formType}/>
        </div>
      </nav>
    );
  }
}

export default SplashPageNav;
