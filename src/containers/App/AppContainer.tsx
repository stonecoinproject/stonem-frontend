import React from 'react';
import routes from '../../routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../config';
import App from '../../components/App';
import HeaderContainer from '../Header';

const AppContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <App>
        <Router>
          {routes}
        </Router>
      </App>
    </ThemeProvider>
  );
};

export default AppContainer;
