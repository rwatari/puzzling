import React from 'react';

class PuzzleDetail extends React.Component {
  constructor() {
    super();
    this.handleSolve = this.handleSolve.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    this.props.requestPuzzle(this.props.params.puzzleId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.puzzleId !== this.props.params.puzzleId) {
      this.props.requestPuzzle(newProps.params.puzzleId);
    }
  }

  handleSolve(e) {
    e.preventDefault();
    const {puzzle} = this.props;
    this.props.updatePuzzle({
      id: puzzle.id,
      solved: !puzzle.solved
    });
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
    const {puzzle, currentUser} = this.props;
    if (puzzle) {
      let followButton;
      if (puzzle.solvers[currentUser.id]) {
        followButton = (
          <button className="inactive-button" disabled={true}>
            <h4>Following</h4>
          </button>
        );
      } else {
        followButton = (
          <button className="active-button" onClick={this.handleFollow}>
            <h4>Follow</h4>
          </button>
        );
      }
      return (
        <div className="detail-view">
          <div className="detail-header">
            <div className="detail-header-text">
              <h3>Puzzle:</h3>
              <h4>{puzzle.title}</h4>
              <h3>Status:</h3>
              <h4>{(puzzle.solved) ? "Solved!" : "Unsolved"}</h4>
            </div>
            <nav className="detail-nav">
              <ul>
                <li>
                  <button className="active-button" onClick={this.handleSolve}>
                    <h4>{(puzzle.solved) ? "Not Solved?" : "Solved?"}</h4>
                  </button>
                </li>
                <li>
                  {followButton}
                </li>
              </ul>
            </nav>
          </div>
          <h3>Description:</h3>
          <p>{puzzle.description}</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default PuzzleDetail;
