import * as React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route, Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import { default as SignupComponent } from '../../../components/Signup';

test('Makes sure there are three input fields.', () => {
    const history = createBrowserHistory({
      basename: '/'
    })

    const {
      container,
      unmount,
    } = render(
      <Router history={history}>
        <Route render={() => (
            <SignupComponent/>
          )}
        />
      </Router>
  );


    const signupComponentInputsCount = 3;
    const signupComponentInputs = container.getElementsByTagName('input')

    expect(signupComponentInputs.length).toBe(signupComponentInputsCount);
    
    unmount();
})