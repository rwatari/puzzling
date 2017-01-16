json.extract! puzzle, :id, :title, :description, :solved, :team_id
json.solvers do
  json.array! puzzle.solvers do |solver|
    json.partial! 'api/users/user', user: solver
  end
end
