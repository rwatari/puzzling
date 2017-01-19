```js
{
  session: {
    id: 1,
    username: "app-academy"
  },
  formErrors: {
    session: [],
    puzzle: ["body can't be blank"],
    team: [],
    message: [],
    scheduleEvent: []
  },
  teams: {
    1: {
      id: 1,
      name: "Puzzle Maniacs",
      hunt: "CPC",
      admin: {username: 'billy', id: 5},
      members: [
        {username: 'app-academy', id: 1},
        {username: 'billy', id: 5},
        {username: 'catsanddogs', id: 16},
      ]
    },
    53: {
      id: 53,
      name: "Puzzle Maniacs",
      hunt: "MMH",
      admin: {username: 'app-academy', id: 1},
      members: [
        {username: 'app-academy', id: 1}
      ]
    }
  },
  messages: {
    1: {
      id: 1,
      messageableType: "team",
      messageableId: 53,
      title: "What is a Caesar Cipher?",
      body: "I'm having trouble solving this puzzle",
      authorName: "hunter21",
      updatedAt: "Fri, 13 Jan 2017 15:10:55 +0000"
    },
    2: {
      id: 2,
      messageableType: "team",
      messageableId: 53,
      title: "Need eyes on 'Mourning Glory'",
      body: "There's lots of blanks to fill in and we don't have much time! Please help if you're free!",
      authorName: "cats_and_dogs",
      updatedAt: "Sun, 15 Jan 2017 15:26:55 +0000"
    }
  },
  scheduleEvents: {
    1: {
      id: 1,
      teamId: 53,
      name: "Runaround at noon!",
      description: "Kresge Auditorium. Bring the clues from 'Disco Ball' and some good running shoes."
      startDate: "Sun, 15 Jan 2017 12:00:00 +0000",
      endDate: "Sun, 15 Jan 2017 13:00:00 +0000"
    }
  },
  // bonus
  comments: {
    6: {
      commentableType: 'puzzle',
      commentableId:
      body: "This puzzle is really hard",
      author_name: "jamesissocool",
      created_at: "Sun, 15 Jan 2017 10:45:37 +0000",
    },
    8: {
      body: "Has anyone seen something like this before?",
      author_name: "shalalalala",
      created_at: "Sun, 15 Jan 2017 10:44:15 +0000",
    }
  }
}
```
