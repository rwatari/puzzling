## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**App**
 - Home
 - NavBar

**TeamContainer**
 - TeamMessages
 - TeamPuzzles
 - TeamSchedule

**MessageIndexContainer**
 - MessageIndex
  + MessageIndexItem

**MessageFormContainer**
 - MessageForm

**MessageDetailContainer**
 - MessageDetail
 - CommentIndex
  + CommentIndexItem
  + CommentForm

**ScheduleIndexContainer**
 - DayIndex
  + ScheduleEventIndex
   * ScheduleEventIndexItem

**ScheduleEventFormContainer**
 - ScheduleEventForm

**ScheduleEventDetailContainer**
 - ScheduleEventDetail
 - CommentIndex
  + CommentIndexItem
  + CommentForm

**PuzzleIndexContainer**
 - PuzzleIndex
  + PuzzleIndexItem

**PuzzleFormContainer**
 - PuzzleForm

**PuzzleDetailContainer**
 - PuzzleDetail
 - CommentIndex
  + CommentIndexItem
  + CommentForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "AuthFormContainer" |
| "/home" | "App" |
| "/teams/:teamId" | "TeamContainer" |
| "/messages" | "MessageIndexContainer" |
| "/new-message" | "MessageFormContainer" |
| "/messages/:messageId" | "MessageDetailContainer" |
| "/schedule" | "ScheduleContainer" |
| "/new-schedule-event" | "ScheduleEventFormContainer" |
| "/schedule/:scheduleEventId" | "ScheduleEventDetailContainer" |
| "/puzzles" | "PuzzleIndexContainer" |
| "/new-puzzle" | "PuzzleFormContainer" |
| "/puzzles/:puzzleId" | "PuzzleDetailContainer" |
