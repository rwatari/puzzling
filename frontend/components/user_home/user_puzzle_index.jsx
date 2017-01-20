import React from 'react';
import UserPuzzleIndexItem from './user_puzzle_index_item';
import {isEmpty} from 'lodash';

class UserPuzzleIndex extends React.Component {
  constructor() {
    super();
    this.state = {activeTab: "unsolved"};
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  componentDidMount() {
    this.props.requestUserUnsolvedPuzzles();
  }

  handleTabClick(property) {
    return () => {
      if (this.state.activeTab !== property) {
        this.setState({activeTab: property});
        if (property === "unsolved") {
          this.props.requestUserUnsolvedPuzzles();
        } else {
          this.props.requestUserSolvedPuzzles();
        }
      }
    };
  }

  render() {
    const {puzzles, teams} = this.props;

    let mainContent;
    if (isEmpty(puzzles)) {
      mainContent = <h3>No puzzles!</h3>;
    } else {
      const puzzleItems = Object.keys(puzzles).map(id => (
        <UserPuzzleIndexItem key={id}
          puzzle={puzzles[id]}
          team={teams[puzzles[id].team_id]}/>
      ));
      mainContent = (
        <ul className="card-container">
          {puzzleItems.reverse()}
        </ul>
      );
    }

    return (
      <div className="card-group">
        <h2>Puzzles</h2>
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

export default UserPuzzleIndex;
