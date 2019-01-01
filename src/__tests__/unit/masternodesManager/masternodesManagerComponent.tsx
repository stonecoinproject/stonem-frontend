import * as React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import MasternodesManagerComponent from '../../../components/MasternodesManager';
  
import createBrowserHistory from 'history/createBrowserHistory';

test('Renders the <MasternodesManagerStatusBoard/>', () => {
    // We must simulate a browser history for our component
    // as it is reliant on the context 
    const history = createBrowserHistory({
        basename: '/'
    })

    const {
        getByTestId,
        unmount,
    } = render(
        <Router history={history}>
            <MasternodesManagerComponent />
        </Router>
    );

    const statusBoard:any = getByTestId('masternodes-manager-status-board');
    expect(statusBoard).toBeInstanceOf(HTMLElement);

    unmount();
})