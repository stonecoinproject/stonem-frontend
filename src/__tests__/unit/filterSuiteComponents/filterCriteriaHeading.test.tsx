import * as React from 'react';
import { render } from 'react-testing-library';
import FilterCriteriaHeading from '../../../components/FilterSuite/filterCriteriaHeading';

test('Correctly finds the layout heading by text', () => {
    const {
        getByText,
        unmount,
    } = render(<FilterCriteriaHeading />);

    const textHeading:any = getByText('Layout');
    expect(textHeading).toBeInstanceOf(HTMLElement);

    unmount();
})