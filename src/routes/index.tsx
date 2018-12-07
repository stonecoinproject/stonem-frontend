import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ModalRoute } from 'react-router-modal';
import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';

export default (
  <div>
    <ModalRoute path="*/signup" exact component={SignupScreen} parentPath={'/'} />
    <Route
      path="/"
      component={HomeScreen}
    />
  </div>
);
