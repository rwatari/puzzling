json.extract! puzzle, :id, :title, :description, :solved, :team_id

json.solvers({})
json.solvers do
  puzzle.solvers.each do |solver|
    json.set! solver.id do
      json.partial! 'api/users/user', user: solver
    end
  end
end
