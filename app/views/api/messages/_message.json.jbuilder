json.extract! message, :id, :title, :body, :team_id, :created_at
json.author do
  json.partial! 'api/users/user', user: message.author
end
