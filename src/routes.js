import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './services/RouteSecurity';
import Main from './components/Main';
import Auth from './components/Auth';
import Profile from './components/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" onlyNotLogged redirectTo="/" component={Auth} />
      <Route path="/profile" isPrivate component={Profile} />
    </Switch>
  );
}
