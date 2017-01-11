import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import {withRouter} from 'react-router';

class SplashPageNav extends React.Component {
  constructor() {
    super();
    this.state = {formType: ""};
    this.handleClick = this.handleClick.bind(this);
    this.handleGuestDemo = this.handleGuestDemo.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({formType: e.target.value});
  }

  handleGuestDemo() {
    this.props.loginAsGuest().then(
      () => this.props.router.push("/home")
    );
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
          <h1>Puzzling</h1>
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
            <li>
              <button onClick={this.handleGuestDemo}>Guest Demo</button>
            </li>
          </ul>
        </div>
        {form}
      </nav>
    );
  }
}

export default withRouter(SplashPageNav);
