import React from 'react';
import { Route, Link } from 'react-router-dom';
import routes from '../../routes';
import HeaderContainer from '../HeaderContainer';

export default () => (
  <div>
    <HeaderContainer>
      {routes}
    </HeaderContainer>
  </div>
);

