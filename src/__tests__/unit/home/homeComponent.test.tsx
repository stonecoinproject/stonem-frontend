import * as React from 'react';
import { render } from 'react-testing-library';
import HomeComponent from '../../../components/Home/homeComponent';
  

test('Renders the <IncomeStatsPeriodical/> component', () => {
    const {
        getByTestId,
        unmount,
    } = render(<HomeComponent />);

    const IncomeStatsPeriodical:any = getByTestId('income-stats-card-periodical');
    expect(IncomeStatsPeriodical).toBeInstanceOf(HTMLElement);

    unmount();
})