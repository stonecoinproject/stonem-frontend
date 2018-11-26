import * as React from 'react';
import { render, getByTestId } from 'react-testing-library';
import FilterSearchBar from '../../../components/FilterSuite/filterSearchBar';

test('Renders a search input correctly', () => {
    const {
        getByTestId,
        unmount,
    } = render(<FilterSearchBar />);

    const searchInput:any = getByTestId('filter-search-input');
    expect(searchInput).toBeInstanceOf(HTMLElement);

    unmount();
})