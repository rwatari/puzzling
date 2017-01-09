# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Teams

- `GET /api/teams`
  - index of all teams for a user
- `POST /api/teams`
- `GET /api/teams/:id`
- `PATCH /api/teams/:id`
- `DELETE /api/teams/:id`

### Team membership

- `POST /api/teams/:team_id/members`: add user to team
- `DELETE /api/teams/:team_id/members/:user_id`: remove member from team

### Puzzles

- `GET /api/puzzles`
  - index of all puzzles for a team
- `POST /api/puzzles`
- `GET /api/puzzles/:id`
- `PATCH /api/puzzles/:id`
- `DELETE /api/puzzles/:id`

### Puzzle solvers

- `POST /api/puzzles/:puzzle_id/members`: add user to puzzle
- `DELETE /api/puzzles/:puzzle_id/members/:user_id`: remove member from puzzle

### Messages

- `GET /api/messages`
  - index of all messages for a team or puzzle
- `POST /api/messages`
  - needs polymorphic type
- `GET /api/messages/:id`
- `PATCH /api/messages/:id`
- `DELETE /api/messages/:id`

### Events

- `GET /api/events`
  - index of all events for a team
- `POST /api/events`
- `GET /api/events/:id`
- `PATCH /api/events/:id`
- `DELETE /api/events/:id`

### Comments

- `GET /api/comments`
  - index of all comments for a message or event
- `POST /api/comments`
  - needs polymorphic type
- `DELETE /api/comments/:id`
