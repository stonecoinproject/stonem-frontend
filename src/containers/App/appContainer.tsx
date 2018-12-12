import * as React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ModalContainer } from 'react-router-modal';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../config';
import App from '../../components/App';
import { default as Routes } from '../../routes';

const appContainer = (props:any) => {
  return (
    <Router>
      <AppContainer>
        <Provider store={props.store}>
          <ThemeProvider theme={theme}>
                <div>
                  <App>
                    <Routes />
                  </App>
                  <ModalContainer />
                </div>
          </ThemeProvider>
        </Provider>
      </AppContainer>
    </Router>
  );
};

export default appContainer;
