import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import { default as rootReducer } from './reducers';

const devtoolsCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers: typeof compose =
  process.env.NODE_ENV !== 'production' && devtoolsCompose || compose;
const enhancer = composeEnhancers(applyMiddleware(reduxThunk), applyMiddleware(reduxPromise));

export default function configureStore() {
  const store = createStore(rootReducer, {}, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
