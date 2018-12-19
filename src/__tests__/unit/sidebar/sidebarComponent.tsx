import * as React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route, Router } from 'react-router-dom';
import { render } from 'react-testing-library';
import SidebarComponent from '../../../components/Sidebar/sidebarComponent';

test('Makes sure there are four sidebar components.', () => {
    // We must simulate a browser history for our sidebar component
    // as it is reliant on the location object made available from React Router.
    const history = createBrowserHistory({
        basename: '/'
    })
    const {
        container,
        unmount,
    } = render(
        <Router history={history}>
            <Route render={({ location }) => (
                <SidebarComponent location={location}/>
            )}
        />
        </Router>
    );
    const sidebarComponentItemsCount = 4;

    const sidebarComponentItems = container.querySelectorAll('[data-testid="sidebar-component-item"]')
    expect(sidebarComponentItems.length).toBe(sidebarComponentItemsCount);

    unmount();
})