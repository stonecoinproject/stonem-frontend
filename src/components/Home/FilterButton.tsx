import React from 'react';
import { Button } from 'rebass';
import { Dot } from '../UI';
import { theme } from '../../config';

const FilterButton = ({ isSelected, children }:any) => (
    <Button
      px={3}
      variant={'default'}
    >
      {isSelected && 
        <Dot
          theme={theme}
          css={{
            position: 'absolute',
            top: 3,
            right: 3,
          }}
        />
      }
      {children}
    </Button>
  );
  
export default FilterButton;
