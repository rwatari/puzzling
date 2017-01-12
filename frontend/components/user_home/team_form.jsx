import React from 'react';

class TeamForm extends React.Component {
  constructor() {
    super();
    this.state = {name: '', hunt_name: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(property) {
    return e => {
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTeam(this.state).then(this.resetForm);
  }

  resetForm() {
    this.setState({name: '', hunt: ''});
    this.props.hideForm();
  }

  render() {
    return (
      <li key="form"
        className="item-card form-card">
        <form onSubmit={this.handleSubmit}>
          <label>
            <h5>Team name:</h5>
            <input type="text"
              value={this.state.name}
              onChange={this.handleChange("name")}/>
          </label>
          <label>
            <h5>Hunt name:</h5>
            <input type="text"
              value={this.state.hunt}
              onChange={this.handleChange("hunt_name")}/>
          </label>
          <ul className="card-form-errors">
            {this.props.errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
          <input type="submit" value="Add team!"/>
          <button onClick={this.props.hideForm}>Cancel</button>
        </form>
      </li>
    );
  }
}

export default TeamForm;
