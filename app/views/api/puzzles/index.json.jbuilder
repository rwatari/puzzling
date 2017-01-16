@puzzles.each do |puzzle|
  json.set! puzzle.id do
    json.partial! 'puzzle', puzzle: puzzle
  end
end
