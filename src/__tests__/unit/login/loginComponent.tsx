import * as React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route, Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import { default as LoginComponent } from '../../../components/Login';

test('Makes sure there are two input fields.', () => {
    const history = createBrowserHistory({
      basename: '/'
    })

    const {
      container,
      unmount,
    } = render(
      <Router history={history}>
        <Route render={() => (
            <LoginComponent/>
          )}
        />
      </Router>
  );

    const loginComponentInputsCount = 2;
    const loginComponentInputs = container.getElementsByTagName('input')

    expect(loginComponentInputs.length).toBe(loginComponentInputsCount);
    
    unmount();
})