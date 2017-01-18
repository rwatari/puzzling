import React from 'react';
import {isEmpty} from 'lodash';
import {Link} from 'react-router';
import PuzzleIndexItem from './puzzle_index_item';

class PuzzleIndex extends React.Component {
  constructor() {
    super();
    this.state = {activeTab: "unsolved"};
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  componentDidMount() {
    this.props.requestUnsolvedPuzzles();
  }

  handleTabClick(property) {
    return () => {
      if (this.state.activeTab !== property) {
        this.setState({activeTab: property});
        if (property === "unsolved") {
          this.props.requestUnsolvedPuzzles();
        } else {
          this.props.requestSolvedPuzzles();
        }
      }
    };
  }

  render() {
    const {
      puzzles,
      requestSolvedPuzzles,
      requestUnsolvedPuzzles
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
            <PuzzleIndexItem key={id} puzzle={puzzles[id]}/>
          ))}
        </ul>
      );
    }

    return (
      <div className="team-partial">
        <h3>Puzzles</h3>
        <Link to={`/teams/${this.props.params.teamId}/new-puzzle`}>
          <h4>Add a puzzle</h4>
        </Link>
        <nav className="puzzle-index-nav">
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

export default PuzzleIndex;
