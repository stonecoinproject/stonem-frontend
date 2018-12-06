import * as React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../config';
import App from '../../components/App';
import routes from '../../routes';

import 'react-router-modal/css/react-router-modal.css';

const appContainer = () => {
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

export default appContainer;
