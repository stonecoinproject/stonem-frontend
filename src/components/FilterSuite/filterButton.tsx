import * as React from 'react';
import { Button } from 'rebass';
import { Dot } from '../UI';
import { theme } from '../../config';
const filterButton = ({ isSelected, children }:any) => (
  <Button
    px={3}
    variant={'default'}
    data-testid={'filter-button'}
  >
    {/*
      If `isSelected` is true, render a <Dot/> within the button.
    */}
    {isSelected &&
      <Dot
        theme={theme}
        css={{
          position: 'absolute',
          top: 3,
          right: 3,
        }}
        data-testid={'dot'}
      />
    }
    {children}
  </Button>
);
filterButton.defaultProps = {
  isSelected: false,
};
export default filterButton;
