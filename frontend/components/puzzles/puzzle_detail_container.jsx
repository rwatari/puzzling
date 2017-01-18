import {connect} from 'react-redux';
import {requestPuzzle, updatePuzzle} from '../../actions/puzzle_actions';
import PuzzleDetail from './puzzle_detail';

const mapStateToProps = (state, ownProps) => ({
  puzzle: state.puzzles[ownProps.params.puzzleId],
  currentUser: state.session
});

const mapDispatchToProps = dispatch => ({
  requestPuzzle: id => dispatch(requestPuzzle(id)),
  updatePuzzle: puzzle => dispatch(updatePuzzle(puzzle))
});

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleDetail);
