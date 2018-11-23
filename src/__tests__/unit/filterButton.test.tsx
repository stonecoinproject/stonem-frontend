import * as React from 'react';
import { render } from 'react-testing-library';
import FilterButton from '../../components/FilterSuite/filterButton';

test('A `Dot` element is rendered when the filter button is selected', () => {
    const {
        queryByTestId,
        unmount
    } = render(<FilterButton isSelected/>);

    const dot = queryByTestId('dot');
    expect(dot).toBeInstanceOf(HTMLElement);

    unmount();
})

test('No `Dot` element is rendered when the filter button is not selected', () => {
    const {
        queryByTestId,
        unmount
    } = render(<FilterButton isSelected={false}/>);

    const dot = queryByTestId('dot');    
    expect(dot).toBeNull();

    unmount();
})
