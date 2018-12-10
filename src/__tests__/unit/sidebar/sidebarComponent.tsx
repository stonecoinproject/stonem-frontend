import * as React from 'react';
import { StaticRouter } from 'react-router-dom';
import { render } from 'react-testing-library';
import SidebarComponent from '../../../components/Sidebar/sidebarComponent';

test('Makes sure there are four sidebar components.', () => {
    const {
        container,
        unmount,
    } = render(
        <StaticRouter>
            <SidebarComponent />
        </StaticRouter>
    );
    const sidebarComponentItemsCount = 4;

    const sidebarComponentItems = container.querySelectorAll('[data-testid="sidebar-component-item"]')
    expect(sidebarComponentItems.length).toBe(sidebarComponentItemsCount);

    unmount();
})