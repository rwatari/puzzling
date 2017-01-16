import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import SplashPage from './splash_page/splash_page';
import UserHomeContainer from './user_home/user_home_container';
import TeamHomeContainer from './team_home/team_home_container';

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
            <Route path="puzzles"
              component={Puzzles}
              onEnter={_redirectUnlessLoggedIn}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

const Puzzles = () => (
  <h1>Puzzles!</h1>
);

export default Root;
