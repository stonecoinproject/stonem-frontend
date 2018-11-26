import * as React from 'react';
import { Button } from 'rebass';
import { Dot } from '../UI';
import { theme } from '../../config';

interface filterButtonProps {
  isSelected: boolean;
  children?: any;
}

const styles = {
  DotStyle: {
    position: 'absolute',
    top: 3,
    right: 3,
  },
};

const filterButton = ({
  isSelected,
  children,
}:filterButtonProps) => (
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
        css={styles.DotStyle}
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
