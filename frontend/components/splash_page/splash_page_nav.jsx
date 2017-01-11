import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

class SplashPageNav extends React.Component {
  constructor() {
    super();
    this.state = {formType: "login"};
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
              <button>Sign up</button>
            </li>
            <li>
              <button>Log In</button>
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
