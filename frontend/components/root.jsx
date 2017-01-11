import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import SplashPage from './splash_page/splash_page';

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
          <Route path="/home" component={Home} onEnter={_redirectUnlessLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

const Home = () => <h3>Home!</h3>;


export default Root;
