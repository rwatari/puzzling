import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import {withRouter} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SplashPageNav extends React.Component {
  constructor() {
    super();
    this.state = {formType: "login", formOpen: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleGuestDemo = this.handleGuestDemo.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({formType: e.target.value});
    this.showForm();
  }

  handleGuestDemo() {
    this.props.loginAsGuest().then(
      () => this.props.router.push("/home")
    );
  }

  showForm() {
    this.setState({formOpen: true});
  }

  hideForm() {
    this.setState({formOpen: false});
  }

  render() {
    let form;
    if (this.state.formOpen) {
      form = (
        <div key={this.state.formType} className="session-form">
          <SessionFormContainer formType={this.state.formType}/>
        </div>
      );
    } else {
      form = <div key="close-form"></div>;
    }

    return (
      <nav className="splash-nav">
        <div className="logo">
          <h1>Puzzling!</h1>
        </div>
        <div>
          <ul className="splash-nav-session">
            <li>
              <button className="active-button" onClick={this.handleClick}
                value="signup">Sign up</button>
            </li>
            <li>
              <button className="active-button" onClick={this.handleClick}
                value="login">Log In</button>
            </li>
            <li>
              <button className="active-button" onClick={this.handleGuestDemo}>Guest Demo</button>
            </li>
          </ul>
        </div>
        <ReactCSSTransitionGroup
          transitionName="session-form"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {form}
        </ReactCSSTransitionGroup>
      </nav>
    );
  }
}

export default withRouter(SplashPageNav);
