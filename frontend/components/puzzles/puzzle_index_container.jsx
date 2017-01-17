import {connect} from 'react-redux';
import {requestTeamPuzzles} from '../../actions/puzzle_actions';
import PuzzleIndex from './puzzle_index';

const mapStateToProps = state => ({
  puzzles: state.puzzles
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestSolvedPuzzles: () => dispatch(requestTeamPuzzles({
    team_id: ownProps.params.teamId,
    solved: true
  })),
  requestUnsolvedPuzzles: () => dispatch(requestTeamPuzzles({
    team_id: ownProps.params.teamId,
    solved: false
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleIndex);
