import * as React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ModalContainer } from 'react-router-modal';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../config';
import App from '../../components/App';
import routes from '../../routes';

const appContainer = ({ store }:any) => {
  return (
      <AppContainer>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
              <Router>
                <div>
                  <App>
                    {routes}
                  </App>
                  <ModalContainer />
                </div>
              </Router>
          </ThemeProvider>
        </Provider>
      </AppContainer>
  );
};

export default appContainer;
