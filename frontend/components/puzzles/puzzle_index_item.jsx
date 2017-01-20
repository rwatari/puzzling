import React from 'react';
import {Link} from 'react-router';
import MembersIcons from '../user_home/members_icons';

class PuzzleIndexItem extends React.Component {
  constructor() {
    super();
    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow(action) {
    return e => {
      e.preventDefault();
      const {currentUser, puzzle, createSolving, deleteSolving} = this.props;
      const solvingAction = (
        (action === "create") ? createSolving : deleteSolving
      );
      
      solvingAction({
        user_id: currentUser.id,
        puzzle_id: puzzle.id
      });
    };
  }

  render() {
    const {puzzle, currentUser} = this.props;
    let followButton;
    if (puzzle.solvers[currentUser.id]) {
      followButton = (
        <button className="active-button" onClick={this.handleFollow("delete")}>
          <h4>Following</h4>
        </button>
      );
    } else {
      followButton = (
        <button className="active-button" onClick={this.handleFollow("create")}>
          <h4>Follow</h4>
        </button>
      );
    }
    return (
      <li className="partial-index-item">
        <Link to={`/teams/${puzzle.team_id}/puzzles/${puzzle.id}`}>
          <div className="item-info">
            <div className="item-header">
              <h4>{puzzle.title}</h4>
              <h6>{`${puzzle.description.substring(0, 120)}...`}</h6>
            </div>
            <MembersIcons members={puzzle.solvers}/>
          </div>
          <div className="item-nav">
            <ul>
              <li>
                {followButton}
              </li>
            </ul>
          </div>
        </Link>
      </li>
    );
  }
}

export default PuzzleIndexItem;
