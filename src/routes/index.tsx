import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ModalRoute } from 'react-router-modal';
import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';

export default class Routes extends React.Component {
  constructor (props:any) {
    super(props);
  }

  render () {
    return (
      <Route render={({ match }) => {
        return (
          <div>
            <ModalRoute
              path="*/signup"
              exact
              component={SignupScreen}
              parentPath={match.path}
            />
            <Route
              path="/"
              component={HomeScreen}
            />
          </div>
        );
      }} />
    );
  }
}
