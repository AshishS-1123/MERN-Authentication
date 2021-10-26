import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from 'containers/HomePage/Loadable'
import SignIn from 'containers/SignIn/Loadable'
import SignUp from 'containers/SignUp/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
