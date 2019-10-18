import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Auth from './components/Auth';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" component={Auth} />
    </Switch>
  );
}
