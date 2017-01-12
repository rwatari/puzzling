@teams.each do |team|
  json.set! team.id do
    json.partial! 'team', team: team
  end
end
