# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
guest = User.create(username: "guest", password: 'helloworld')

user1 = User.create(username: 'user1', password: SecureRandom.base64)
user2 = User.create(username: 'user2', password: SecureRandom.base64)
user3 = User.create(username: 'user3', password: SecureRandom.base64)

team1 = Team.new(
   name: 'Panic Mages - MH2015', hunt_name: 'Mystery Hunt 2015'
)
team2 = Team.new(
   name: 'Panic Mages - MH2016', hunt_name: 'Mystery Hunt 2016'
)

team1.admin = guest
team2.admin = guest

team1.save!
team2.save!

Membership.create([
  { user_id: guest.id, team_id: team1.id },
  { user_id: guest.id, team_id: team2.id },
  { user_id: user1.id, team_id: team1.id },
  { user_id: user2.id, team_id: team1.id },
  { user_id: user3.id, team_id: team2.id }
])

puzzle1 = Puzzle.create(
  team_id: team1.id,
  title: "Many crossings",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  solved: false
)

puzzle2 = Puzzle.create(
  team_id: team1.id,
  title: "Strange Tidings",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  solved: false
)

puzzle3 = Puzzle.create(
  team_id: team2.id,
  title: "Another one bites the dust",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  solved: false
)

Solving.create([
  { user_id: guest.id, puzzle_id: puzzle1.id },
  { user_id: guest.id, puzzle_id: puzzle2.id },
  { user_id: guest.id, puzzle_id: puzzle3.id },
  { user_id: user1.id, puzzle_id: puzzle1.id },
  { user_id: user2.id, puzzle_id: puzzle1.id },
  { user_id: user2.id, puzzle_id: puzzle3.id },
  { user_id: user3.id, puzzle_id: puzzle3.id },
])
