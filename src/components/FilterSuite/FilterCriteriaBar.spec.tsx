import * as React from 'react';
import { render } from 'react-testing-library';
import FilterCriteriaBar from './filterCriteriaBar';

test('Criteria filter buttons are rendered for each filter criteria.', () => {
    const filterCriteria = [
        { name: 'Price', isSelected: true },
        { name: 'Change', isSelected: false },
        { name: 'Volume', isSelected: false },      
    ];
    const {
        container,
        unmount,
    } = render(<FilterCriteriaBar filterCriteria={filterCriteria} />);

    const buttons:any = container.querySelectorAll('[data-testid="filter-button"]');
    expect(buttons.length).toBe(filterCriteria.length);

    unmount();
})