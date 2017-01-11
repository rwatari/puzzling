import React from 'react';
import SplashPageNavContainer from './nav_bars/splash_page_nav_container';
import NavContainer from './nav_bars/nav_container';

const App = (props) => {
  let nav;
  if (props.location.pathname === "/") {
    nav = <SplashPageNavContainer />;
  } else {
    nav = <NavContainer />;
  }
  return (
    <div>
      {nav}
      {props.children}
    </div>
  );
};

export default App;
