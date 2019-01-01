import * as React from 'react';
import { Box } from 'rebass';
import { DeadCentered } from '../UI';

const sidebarComponentItem = ({
    children,
    isHighlighted,
    ...props }:any) => {
  return (
      <DeadCentered {...props}>
        <Box px={3}>
          {children}
        </Box>
      </DeadCentered>
  );
};

sidebarComponentItem.defaultProps = {
  isHighlighted: false,
};

export default sidebarComponentItem;
