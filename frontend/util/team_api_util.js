export const fetchTeams = () => (
  $.ajax({
    method: 'GET',
    url: 'api/teams'
  })
);

export const fetchTeam = id => (
  $.ajax({
    method: 'GET',
    url: `api/teams/${id}`
  })
);

export const createTeam = team => (
  $.ajax({
    method: 'POST',
    url: `api/teams`,
    data: {team}
  })
);
