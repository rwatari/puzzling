# Puzzling

* [Heroku link (TODO)][heroku]
* [Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/D61M23Ps/puzzling

## Minimum Viable Product

Puzzling is a web application inspired by Basecamp built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Teams
- [ ] Puzzles
- [ ] Team Message Board
- [ ] Scheduling
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Team API and components (2 days)

**Objective:** Teams can be created, read, edited and destroyed through
the API. Team home page shows simplified puzzle, message, and schedule indicies.

### Phase 3: Puzzles API and components (2 days)

**Objective:** Puzzles belong to Teams and can be created, read, edited and destroyed through the API. Frontend features index view, form, and detail view.

### Phase 4: Messages API and components (1 days)

**Objective:** Messages belong to Teams and can be created, read, edited and destroyed through the API. Frontend features index view, form, and detail view.

### Phase 4: Schedule API and components (2 days)

**Objective:**  Events belong to Teams and can be created, read, edited and destroyed through the API. Frontend features index view, form, and detail view.

### Bonus Features (TBD)
- [ ] Comments
- [ ] Google Docs integration
- [ ] Messaging
