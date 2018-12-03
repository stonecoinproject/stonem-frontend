import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './store';
import routes from './routes';
import App from './containers/App';

// tslint:disable-next-line:variable-name
function renderMain(App: any) {
  return (
    <AppContainer>
      <Provider store={store()}>
          <App />
      </Provider>
    </AppContainer>
  );
}

render(renderMain(App), document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(renderMain(require('./containers/App').default), document.getElementById('root'));
  });
}
