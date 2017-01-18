import {connect} from 'react-redux';
import UserPuzzleIndex from './user_puzzle_index';
import {
  requestUserPuzzles
} from '../../actions/puzzle_actions';

const mapStateToProps = ({puzzles, teams}) => ({puzzles, teams});

const mapDispatchToProps = dispatch => ({
  requestUserUnsolvedPuzzles: () => dispatch(requestUserPuzzles({solved: false})),
  requestUserSolvedPuzzles: () => dispatch(requestUserPuzzles({solved: true}))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPuzzleIndex);
