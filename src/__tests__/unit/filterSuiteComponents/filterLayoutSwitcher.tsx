import * as React from 'react';
import { render } from 'react-testing-library';
import FilterLayoutSwitcher from '../../../components/FilterSuite/filterLayoutSwitcher';

test('Makes sure two switcher icons are rendered', () => {
    const {
        container,
        unmount
    } = render(<FilterLayoutSwitcher />);
    const switcherIconsCount:number = 2;

    const switcherIcons:any = container.querySelectorAll('[data-testid="switcher-icon"]');
    expect(switcherIcons.length).toBe(switcherIconsCount);

    unmount();
})