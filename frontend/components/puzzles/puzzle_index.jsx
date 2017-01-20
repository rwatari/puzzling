import React from 'react';
import {isEmpty} from 'lodash';
import {withRouter} from 'react-router';
import PuzzleIndexItem from './puzzle_index_item';

class PuzzleIndex extends React.Component {
  constructor() {
    super();
    this.state = {activeTab: "unsolved"};
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    this.props.requestUnsolvedPuzzles(this.props.params.teamId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location.pathname !== this.props.location.pathname) {
      this.props.requestUnsolvedPuzzles(newProps.params.teamId);
    }
  }

  handleTabClick(property) {
    const {teamId} = this.props.params;
    return () => {
      if (this.state.activeTab !== property) {
        this.setState({activeTab: property});
        if (property === "unsolved") {
          this.props.requestUnsolvedPuzzles(teamId);
        } else {
          this.props.requestSolvedPuzzles(teamId);
        }
      }
    };
  }

  handleButtonClick(e) {
    e.preventDefault();
    this.props.router.push(`/teams/${this.props.params.teamId}/new-puzzle`);
  }

  render() {
    const {
      puzzles,
      requestSolvedPuzzles,
      requestUnsolvedPuzzles,
      currentUser,
      createSolving,
      deleteSolving
    } = this.props;

    let mainContent;
    if (isEmpty(puzzles)) {
      mainContent = (
        <div className="team-partial-content">
          <h3>No puzzles!</h3>
        </div>
      );
    } else {
      mainContent = (
        <ul className="team-partial-content">
          {Object.keys(puzzles).map(id => (
            <PuzzleIndexItem key={id}
              puzzle={puzzles[id]}
              currentUser={currentUser}
              createSolving={createSolving}
              deleteSolving={deleteSolving}/>
          ))}
        </ul>
      );
    }

    return (
      <div className="team-partial">
        <h3>Puzzles</h3>
        <button onClick={this.handleButtonClick}
          className="active-button">
          <h4>Add a puzzle</h4>
        </button>
        <br />
        <nav className="tab-index-nav">
          <ul>
            <li className={(this.state.activeTab === "unsolved") ? "active-tab" : "inactive-tab"}
              onClick={this.handleTabClick("unsolved")}>
              <h4>Unsolved</h4>
            </li>
            <li className={(this.state.activeTab === "solved") ? "active-tab" : "inactive-tab"}
              onClick={this.handleTabClick("solved")}>
              <h4>Solved</h4>
            </li>
          </ul>
        </nav>
        {mainContent}
      </div>
    );
  }
}

export default withRouter(PuzzleIndex);
