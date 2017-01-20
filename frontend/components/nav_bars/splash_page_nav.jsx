import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import {withRouter} from 'react-router';
import Modal from 'react-modal';

class SplashPageNav extends React.Component {
  constructor() {
    super();
    this.state = {formType: "login", modalOpen: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleGuestDemo = this.handleGuestDemo.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({formType: e.target.value});
    this.openModal();
  }

  handleGuestDemo() {
    this.props.loginAsGuest().then(
      () => this.props.router.push("/home")
    );
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  render() {
    const form = (
      <div className="session-form">
        <SessionFormContainer formType={this.state.formType}/>
      </div>
    );

    return (
      <nav className="splash-nav">
        <div className="logo">
          <h1>Puzzling</h1>
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
        <Modal
          className="session-form-modal"
          contentLabel="SessionForm"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>
          {form}
        </Modal>
      </nav>
    );
  }
}

export default withRouter(SplashPageNav);
