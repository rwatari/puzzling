import React from 'react';
import MembersIcons from '../user_home/members_icons';

class PuzzleIndexItem extends React.Component {
  constructor() {
    super();
    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow(e) {
    e.preventDefault();
    const {currentUser, puzzle} = this.props;
    this.props.createSolving({
      user_id: currentUser.id,
      puzzle_id: puzzle.id
    });
  }

  render() {
    const {puzzle, currentUser, createSolving} = this.props;
    let followButton;
    if (puzzle.solvers[currentUser.id]) {
      followButton = (
        <button className="inactive-button" disabled={true}>
          <h4>Following</h4>
        </button>
      );
    } else {
      followButton = (
        <button onClick={this.handleFollow}>
          <h4>Follow</h4>
        </button>
      );
    }
    return (
      <li className="partial-index-item">
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
      </li>
    );
  }
}

export default PuzzleIndexItem;
