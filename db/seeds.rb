# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
guest = User.create(username: "guest", password: 'helloworld')

User.create([
  { username: 'user1', password: SecureRandom.base64 },
  { username: 'user2', password: SecureRandom.base64 },
  { username: 'user3', password: SecureRandom.base64 }
])

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
  { user_id: 1, team_id: 1 },
  { user_id: 1, team_id: 2 },
  { user_id: 2, team_id: 1 },
  { user_id: 3, team_id: 1 },
  { user_id: 4, team_id: 2 }
])
