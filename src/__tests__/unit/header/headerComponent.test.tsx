import * as React from 'react';
import { render } from 'react-testing-library';
import HeaderComponent from '../../../components/Header/headerComponent';

import {
    app
} from '../../../config';
  

test('Correctly finds the layout heading by text', () => {
    const {
        getByText,
        unmount,
    } = render(<HeaderComponent />);

    const textHeading:any = getByText(app.name);
    expect(textHeading).toBeInstanceOf(HTMLElement);

    unmount();
})