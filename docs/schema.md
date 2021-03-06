# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## teams
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
hunt_name   | string    | not null
admin_id    | integer   | not null, foreign key (references users), indexed

## memberships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed, unique [team_id]
team_id     | integer   | not null, foreign key (references teams), indexed

## puzzles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
team_id     | integer   | not null, foreign key (references teams), indexed
title       | string    | not null
description | text      |
solved      | boolean   | not null, default: false

## solvings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed, unique [puzzle_id]
puzzle_id   | integer   | not null, foreign key (references puzzles), indexed

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
team_id     | integer   | not null, foreign key (references teams), indexed

## schedule_events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
start_datetime  | datetime  | not null
end_datetime    | datetime  | not null
team_id     | integer   | not null, foreign key (references teams), indexed

## comments (bonus)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
commentable | references| not null, foreign key (references teams or puzzles), polymorphic, indexed
