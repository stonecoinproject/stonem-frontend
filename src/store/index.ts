import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers';

const devtoolsCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers: typeof compose =
  process.env.NODE_ENV !== 'production' && devtoolsCompose || compose;
const enhancer = composeEnhancers(applyMiddleware(ReduxThunk), applyMiddleware(ReduxPromise));

export default function configureStore() {
  const store = createStore(rootReducer, {}, enhancer);
  if (module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(require('./reducers').default));
  }
  return store;
}
