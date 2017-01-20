# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
guest = User.create(username: "guest", password: 'helloworld')

user1 = User.create(username: 'wata', password: SecureRandom.base64)
user2 = User.create(username: 'haz', password: SecureRandom.base64)
user3 = User.create(username: 'cats', password: SecureRandom.base64)

[
  "FluffyOctopus",
  "xXRed-TrollXx",
  "pizzazombies",
  "thundercats",
  "pmiller",
  "jellybeans"
].each do |username|
  User.create(username: username, password: SecureRandom.base64)
end

team1 = Team.new(
   name: 'Panic Mages - MH2015', hunt_name: 'Mystery Hunt 2015'
)
team2 = Team.new(
   name: 'Panic Mages - MH2017', hunt_name: 'Mystery Hunt 2017'
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
  { user_id: user2.id, team_id: team2.id },
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
  solved: true
)

puzzle2 = Puzzle.create(
  team_id: team1.id,
  title: "Denizens of the Sky",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  solved: true
)

puzzle3 = Puzzle.create(
  team_id: team1.id,
  title: "Choose Your Salad",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  solved: false
)

puzzle4 = Puzzle.create(
  team_id: team1.id,
  title: "Toasting the Toast",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  solved: true
)

puzzle5 = Puzzle.create(
  team_id: team2.id,
  title: "Another one bites the dust",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  solved: false
)

Solving.create([
  { user_id: guest.id, puzzle_id: puzzle1.id },
  { user_id: guest.id, puzzle_id: puzzle2.id },
  { user_id: guest.id, puzzle_id: puzzle3.id },
  { user_id: guest.id, puzzle_id: puzzle4.id },
  { user_id: guest.id, puzzle_id: puzzle5.id },
  { user_id: user1.id, puzzle_id: puzzle1.id },
  { user_id: user2.id, puzzle_id: puzzle1.id },
  { user_id: user2.id, puzzle_id: puzzle3.id },
  { user_id: user2.id, puzzle_id: puzzle4.id },
  { user_id: user3.id, puzzle_id: puzzle5.id },
])

Message.create([
  { author_id: guest.id, team_id: team1.id, title: 'Invite Your Friends!',
    body: 'Every helping hand is a great asset to the team, no matter the background!' },
  { author_id: guest.id, team_id: team1.id, title: 'Hunt Starting!!',
    body: 'The hunt is starting in 20 minutes everyone!' },
  { author_id: user1.id, team_id: team1.id, title: 'Round 1 available',
    body: "Go to the hunt website to see the first batch of puzzles. Our team login info is as follows: \n\n username: PanicMages\npassword: panicatthedisco" },
  { author_id: guest.id, team_id: team1.id, title: 'Get some sleep',
    body: "It's been a long day of puzzling. If you haven't already, consider getting some sleep and starting fresh tomorrow." },
  { author_id: guest.id, team_id: team1.id, title: 'Congrats Team!',
    body: 'We finished the hunt! See you next year!' },
  { author_id: user2.id, team_id: team2.id, title: 'Puzzle Hunting resources',
    body: 'Can anyone recommend some resources for hunting? This is my first hunt' }
])

ScheduleEvent.create([
  { team_id: team1.id, title: 'HQ Setup',
    description: "Come by at 6 pm to help set up HQ! We'll also be getting dinner",
    start_datetime: Time.new(2015, 1, 15, 18, 0, 0, "-05:00"),
    end_datetime: Time.new(2015, 1, 15, 20, 0, 0, "-05:00") },
  { team_id: team1.id, title: 'Hunt start',
    description: "Get hyped! The hunt starts at noon!",
    start_datetime: Time.new(2015, 1, 16, 12, 0, 0, "-05:00"),
    end_datetime: Time.new(2015, 1, 19, 12, 0, 0, "-05:00") },
  { team_id: team2.id, title: "Next year's hunt",
    description: "Let's get ready for next year!!",
    start_datetime: Time.new(2018, 1, 19, 12, 0, 0, "-05:00"),
    end_datetime: Time.new(2018, 1, 22, 12, 0, 0, "-05:00") }
])
