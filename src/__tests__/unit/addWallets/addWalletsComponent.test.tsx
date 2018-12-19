import * as React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import AddWalletsComponent from '../../../components/AddWallets';
  
import createBrowserHistory from 'history/createBrowserHistory';

test('Renders the address wallet input', () => {
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
            <AddWalletsComponent />
        </Router>
    );

    const walletAddressInput:any = getByTestId('wallet-address-input');
    expect(walletAddressInput).toBeInstanceOf(HTMLElement);

    unmount();
})