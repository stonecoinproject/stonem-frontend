import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ModalRoute } from 'react-router-modal';
import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';

export default (
  <Switch>
    <Route
      exact
      path="/"
      component={HomeScreen}
    />
    <ModalRoute path="/signup">
      <SignupScreen />
    </ModalRoute>
  </Switch>
);
