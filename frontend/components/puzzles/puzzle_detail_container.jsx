import {connect} from 'react-redux';
import {
  requestPuzzle,
  updatePuzzle,
  createSolving,
  deleteSolving
} from '../../actions/puzzle_actions';
import PuzzleDetail from './puzzle_detail';

const mapStateToProps = (state, ownProps) => ({
  puzzle: state.puzzles[ownProps.params.puzzleId],
  currentUser: state.session
});

const mapDispatchToProps = dispatch => ({
  requestPuzzle: id => dispatch(requestPuzzle(id)),
  updatePuzzle: puzzle => dispatch(updatePuzzle(puzzle)),
  createSolving: solving => dispatch(createSolving(solving)),
  deleteSolving: solving => dispatch(deleteSolving(solving))
});

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleDetail);
