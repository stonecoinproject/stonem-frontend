import * as React from 'react';
import { Route } from 'react-router-dom';
import { ModalRoute } from 'react-router-modal';
import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

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
              path={'*/signup'}
              exact
              component={SignupScreen}
              parentPath={match.path}
              inClassName="react-router-modal__modal-in"
              outClassName="react-router-modal__modal-out"
              backdropClassName="react-router-modal__backdrop"
              backdropInClassName="react-router-modal__backdrop-in"
              backdropOutClassName="react-router-modal__backdrop-out"
              outDelay={500}
            />
            <ModalRoute
              path={'*/signin'}
              exact
              component={LoginScreen}
              parentPath={match.path}
              inClassName="react-router-modal__modal-in"
              outClassName="react-router-modal__modal-out"
              backdropClassName="react-router-modal__backdrop"
              backdropInClassName="react-router-modal__backdrop-in"
              backdropOutClassName="react-router-modal__backdrop-out"
              outDelay={500}
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
