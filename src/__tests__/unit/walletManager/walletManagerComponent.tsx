import * as React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import WalletManagerComponent from '../../../components/WalletManager';
  
import createBrowserHistory from 'history/createBrowserHistory';

test('Renders the <WalletManagerStatusBoard/>', () => {
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
            <WalletManagerComponent />
        </Router>
    );

    const statusBoard:any = getByTestId('wallet-manager-status-board');
    expect(statusBoard).toBeInstanceOf(HTMLElement);

    unmount();
})