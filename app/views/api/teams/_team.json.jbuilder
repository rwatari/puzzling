json.extract! team, :id, :name, :hunt_name

json.admin do
  json.partial! 'api/users/user', user: team.admin
end

json.members({})
json.members do
  team.members.each do |member|
    json.set! member.id do
      json.partial! 'api/users/user', user: member
    end
  end
end
