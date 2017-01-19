export const fetchMessages = team_id => (
  $.ajax({
    method: 'GET',
    url: 'api/messages',
    data: {team_id}
  })
);

export const fetchMessage = id => (
  $.ajax({
    method: 'GET',
    url: `api/messages/${id}`
  })
);

export const createMessage = message => (
  $.ajax({
    method: 'POST',
    url: 'api/messages',
    data: {message}
  })
);
