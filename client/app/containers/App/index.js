import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from 'containers/HomePage/Loadable'
import SignInPage from 'containers/SignInPage/Loadable'
import SignUpPage from 'containers/SignUpPage/Loadable'
import ForgotPasswordPage from 'containers/ForgotPasswordPage/Loadable'
import PasswordResetPage from 'containers/PasswordResetPage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={SignInPage} />
        <Route exact path="/register" component={SignUpPage} />
        <Route exact path="/forgotPassword" component={ForgotPasswordPage} />
        <Route exact path="/resetPassword/:resetToken" component={PasswordResetPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  );
}
