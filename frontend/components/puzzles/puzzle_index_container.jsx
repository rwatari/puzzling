import {connect} from 'react-redux';
import {
  requestTeamPuzzles,
  createSolving
} from '../../actions/puzzle_actions';
import PuzzleIndex from './puzzle_index';

const mapStateToProps = state => ({
  puzzles: state.puzzles,
  currentUser: state.session
});

const mapDispatchToProps = dispatch => ({
  requestSolvedPuzzles: teamId => dispatch(requestTeamPuzzles({
    team_id: teamId,
    solved: true
  })),
  requestUnsolvedPuzzles: teamId => dispatch(requestTeamPuzzles({
    team_id: teamId,
    solved: false
  })),
  createSolving: solving => dispatch(createSolving(solving))
});

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleIndex);
