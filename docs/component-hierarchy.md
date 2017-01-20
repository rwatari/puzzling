## Component Hierarchy


**App**
 - NavContainer
 - SplashPageNavContainer
 - SplashPage

**UserHomeContainer**
 - TeamIndexContainer
 - UserPuzzleIndexContainer

**TeamHomeContainer**
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
| "/" | "SplashPage" |
| "/home" | "UserHomeContainer" |
| "/teams/:teamId" | "TeamHomeContainer" |
| "/messages" | "MessageIndexContainer" |
| "/messages/:messageId" | "MessageDetailContainer" |
| "/new-message" | "MessageFormContainer" |
| "/schedule" | "ScheduleContainer" |
| "/schedule/:scheduleEventId" | "ScheduleEventDetailContainer" |
| "/new-event" | "ScheduleEventFormContainer" |
| "/puzzles" | "PuzzleIndexContainer" |
| "/puzzles/:puzzleId" | "PuzzleDetailContainer" |
| "/new-puzzle" | "PuzzleFormContainer" |
