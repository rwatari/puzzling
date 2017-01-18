import {connect} from 'react-redux';
import {createPuzzle} from '../../actions/puzzle_actions';
import PuzzleForm from './puzzle_form';

const mapStateToProps = state => ({
  errors: state.formErrors.puzzle
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPuzzle: puzzle => dispatch(createPuzzle(puzzle))
});

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleForm);
