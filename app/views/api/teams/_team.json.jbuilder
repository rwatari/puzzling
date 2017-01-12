json.extract! team, :id, :name, :hunt_name
json.admin do
  json.partial! 'api/users/user', user: team.admin
end
json.members do
  json.array! team.members do |member|
    json.partial! 'api/users/user', user: member
  end
end
