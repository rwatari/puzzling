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
    url: 'api/teams',
    data: {team}
  })
);

export const queryUsers = query => (
  $.ajax({
    method: 'GET',
    url: 'api/users/search',
    data: {query}
  })
);

export const createMembership = membership => (
  $.ajax({
    method: 'POST',
    url: 'api/memberships',
    data: {membership}
  })
);
