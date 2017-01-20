import React from 'react';
import {withRouter} from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  redirect() {
    this.props.router.push("/home");
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(res => this.redirect());
  }

  handleUpdate(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {
    const {formType, errors} = this.props;
    const {username, password} = this.state;

    const errorList =
    (<ul>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>);

    const buttonText = (formType === "login") ? "Log in!" : "Sign up!";

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={this.handleUpdate("username")}/>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={this.handleUpdate("password")}/>
        {errorList}
        <input className="active-button"
          type="submit" value={buttonText}/>
      </form>
    );
  }
}

export default withRouter(SessionForm);
