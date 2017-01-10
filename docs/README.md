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
- [ ] Home View
- [ ] Scheduling
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: https://github.com/rwatari/puzzling/tree/master/docs/wireframes
[components]: https://github.com/rwatari/puzzling/tree/master/docs/component-hierarchy.md
[sample-state]: https://github.com/rwatari/puzzling/tree/master/docs/sample-state.md
[api-endpoints]: https://github.com/rwatari/puzzling/tree/master/docs/api-endpoints.md
[schema]: https://github.com/rwatari/puzzling/tree/master/docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Team API and components (2 days)

**Objective:** Teams can be created, read, edited and destroyed through
the API.

### Phase 3: Puzzles/Messages/Events API and components (4 days)

**Objective:** Puzzles/Messages/Events belong to Teams that can be created, read, edited and destroyed through the API.

### Phase 4: Comments API and components (1 day)

**Objective:** Puzzles, Messages, and Events can have comments.

### Bonus Features (TBD)
- [ ] Google Docs integration
- [ ] Messaging
