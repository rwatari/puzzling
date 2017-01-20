import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import SplashPage from './splash_page/splash_page';
import UserHomeContainer from './user_home/user_home_container';
import TeamHomeContainer from './team_home/team_home_container';
import TeamPageContainer from './team_page/team_page_container';
import PuzzleIndexContainer from './puzzles/puzzle_index_container';
import PuzzleFormContainer from './puzzles/puzzle_form_container';
import PuzzleDetailContainer from './puzzles/puzzle_detail_container';
import MessageIndexContainer from './messages/message_index_container';
import MessageFormContainer from './messages/message_form_container';
import MessageDetailContainer from './messages/message_detail_container';
import ScheduleEventIndexContainer from './schedule_events/schedule_event_index_container';
import ScheduleEventFormContainer from './schedule_events/schedule_event_form_container';
import ScheduleEventDetailContainer from './schedule_events/schedule_event_detail_container';

const Root = ({store}) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (window.currentUser) {
      replace("/home");
    }
  };

  const _redirectUnlessLoggedIn = (nextState, replace) => {
    if (!window.currentUser && !store.getState().session) {
      replace("/");
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SplashPage}/>
          <Route path="home"
            component={UserHomeContainer}
            onEnter={_redirectUnlessLoggedIn}/>
          <Route path="teams/:teamId"
            onEnter={_redirectUnlessLoggedIn}>
            <IndexRoute component={TeamHomeContainer}/>
            <Route component={TeamPageContainer}
              onEnter={_redirectUnlessLoggedIn}>
              <Route path="puzzles">
                <IndexRoute component={PuzzleIndexContainer}/>
                <Route path=":puzzleId" component={PuzzleDetailContainer}/>
              </Route>
              <Route path="new-puzzle" component={PuzzleFormContainer}/>

              <Route path="messages">
                <IndexRoute component={MessageIndexContainer}/>
                <Route path=":messageId" component={MessageDetailContainer}/>
              </Route>
              <Route path="new-message" component={MessageFormContainer}/>

              <Route path="schedules">
                <IndexRoute component={ScheduleEventIndexContainer}/>
                <Route path=":scheduleId" component={ScheduleEventDetailContainer}/>
              </Route>
              <Route path="new-event" component={ScheduleEventFormContainer}/>
            </Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
