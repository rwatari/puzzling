import React from 'react';
import {withRouter} from 'react-router';

class PuzzleForm extends React.Component {
  constructor() {
    super();
    this.state = {title: '', description: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property) {
    return e => {
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const {title, description} = this.state;
    const {teamId} = this.props.params;
    this.props.createPuzzle({
      title,
      description,
      solved: false,
      team_id: teamId
    }).then(
      puzzle => {
        this.props.router.push(`/teams/${teamId}/puzzles/${puzzle.id}`);
      }
    );
  }

  render() {

    const errorList =
    (<ul>
      {this.props.errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>);
    return (
      <div className="team-partial">
        <h3>Add a Puzzle</h3>
        <div className="team-partial-content">
          <form onSubmit={this.handleSubmit}>
            <label>
              <h4>Title:</h4>
            </label>
            <input type="text"
              onChange={this.handleChange("title")}
              value={this.state.title}/>
            <label>
              <h4>Description:</h4>
            </label>
            <textarea onChange={this.handleChange("description")}
              value={this.state.description}/>
            <br />
            {errorList}
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(PuzzleForm);
