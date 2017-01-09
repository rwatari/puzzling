## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - NavBar

**TeamContainer**
 - TeamMessages
 - TeamPuzzles
 - TeamSchedule

**MessageIndexContainer**
 - MessageIndex
  + MessageListItem

**MessageFormContainer**
 - MessageForm

**MessageDetailContainer**
 - MessageDetail
 - CommentIndex
  + CommentListItem
  + CommentForm

**ScheduleIndexContainer**
 - DayIndex
  + EventIndex
   * EventListItem

**EventFormContainer**
 - EventForm

**EventDetailContainer**
 - EventDetail
 - CommentIndex
  + CommentListItem
  + CommentForm

**PuzzleIndexContainer**
 - PuzzleIndex
  + PuzzleListItem

**PuzzleFormContainer**
 - PuzzleForm

**PuzzleDetailContainer**
 - PuzzleDetail
 - CommentIndex
  + CommentListItem
  + CommentForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/teams/:teamId" | "TeamContainer" |
| "/teams/:teamId/messages" | "MessageIndexContainer" |
| "/teams/:teamId/new-message" | "MessageFormContainer" |
| "/teams/:teamId/messages/:messageId" | "MessageDetailContainer" |
| "/teams/:teamId/schedule" | "ScheduleContainer" |
| "/teams/:teamId/new-event" | "EventFormContainer" |
| "/teams/:teamId/schedule/:eventId" | "EventDetailContainer" |
| "/teams/:teamId/puzzles" | "PuzzleIndexContainer" |
| "/teams/:teamId/new-puzzle" | "PuzzleFormContainer" |
| "/teams/:teamId/puzzles/:puzzleId" | "PuzzleDetailContainer" |
