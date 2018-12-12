import * as React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { default as configureStore } from './store';

const store:any = configureStore();

render(<App store={store} />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    // tslint:disable-next-line:variable-name
    const NextRoot = require('./containers/App').default;
    render(<NextRoot store={store} />, document.getElementById('root'));
  });
}
