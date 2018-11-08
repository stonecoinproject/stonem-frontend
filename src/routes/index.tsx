import React, { SFC } from 'react';
import { Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';

export default (
  <Route exact path="/" component={HomeScreen} />
);
