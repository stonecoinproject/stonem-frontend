import * as React from 'react';
import { render } from 'react-testing-library';
import SidebarComponent from '../../../components/Sidebar/sidebarComponent';

test('Makes sure there are four sidebar components.', () => {
    const {
        container,
        unmount,
    } = render(<SidebarComponent />);
    const sidebarComponentItemsCount = 4;

    const sidebarComponentItems = container.querySelectorAll('[data-testid="sidebar-component-item"]')
    expect(sidebarComponentItems.length).toBe(sidebarComponentItemsCount);

    unmount();
})