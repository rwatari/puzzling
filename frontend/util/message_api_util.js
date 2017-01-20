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

export const updateMessage = message => (
  $.ajax({
    method: 'PATCH',
    url: `api/messages/${message.id}`,
    data: {message}
  })
);

export const deleteMessage = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/messages/${id}`
  })
);
