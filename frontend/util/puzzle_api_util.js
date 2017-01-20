export const fetchTeamPuzzles = ({team_id, solved}) => (
  $.ajax({
    method: 'GET',
    url: 'api/puzzles',
    data: {query: {
      filter_by: 'team',
      team_id,
      solved
    }}
  })
);

export const fetchUserPuzzles = ({solved}) => (
  $.ajax({
    method: 'GET',
    url: 'api/puzzles',
    data: {query: {
      filter_by: 'user',
      solved
    }}
  })
);

export const fetchPuzzle = id => (
  $.ajax({
    method: 'GET',
    url: `api/puzzles/${id}`
  })
);

export const createPuzzle = puzzle => (
  $.ajax({
    method: 'POST',
    url: 'api/puzzles',
    data: {puzzle}
  })
);

export const updatePuzzle = puzzle => (
  $.ajax({
    method: 'PATCH',
    url: `api/puzzles/${puzzle.id}`,
    data: {puzzle}
  })
);

export const createSolving = solving => (
  $.ajax({
    method: 'POST',
    url: `api/puzzles/${solving.puzzle_id}/solving`,
    data: {solving}
  })
);

export const deleteSolving = solving => (
  $.ajax({
    method: 'DELETE',
    url: `api/puzzles/${solving.puzzle_id}/solving`,
    data: {solving}
  })
);
