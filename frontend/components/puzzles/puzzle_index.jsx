import React from 'react';
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

    return (
      <div className="team-content-partial">
        <h3>Puzzles</h3>
        <h4>Add a puzzle</h4>
        <nav className="puzzle-index-nav">
          <ul>
            <li className={(this.state.activeTab === "unsolved") ? "active-tab" : ""}
              onClick={this.handleTabClick("unsolved")}>
              <h4>Unsolved</h4>
            </li>
            <li className={(this.state.activeTab === "solved") ? "active-tab" : ""}
              onClick={this.handleTabClick("solved")}>
              <h4>Solved</h4>
            </li>
          </ul>
        </nav>
        <ul className="team-partial-content">
          {Object.keys(puzzles).map(id => (
            <PuzzleIndexItem key={id} puzzle={puzzles[id]}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default PuzzleIndex;
