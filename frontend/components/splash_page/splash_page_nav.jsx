import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';

class SplashPageNav extends React.Component {
  constructor() {
    super();
    this.state = {formType: ""};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({formType: e.target.value});
  }

  render() {
    let form;
    if (this.state.formType) {
      form = (
        <div className="session-form">
          <SessionFormContainer formType={this.state.formType}/>
        </div>
      );
    }
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
        {form}
      </nav>
    );
  }
}

export default SplashPageNav;
