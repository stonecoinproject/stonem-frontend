import * as React from 'react';
import styledComponents from 'styled-components';
import { Box } from 'rebass';

const caret = styledComponents(Box)`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-top: ${props => props.theme.size}px solid ${props => props.theme.caretColor};
    border-left: ${props => props.theme.size}px solid transparent;
    border-right: ${props => props.theme.size}px solid transparent;
  }

  :after {
    content: '';
    position: absolute;
    left: ${props => (props.theme.size / 2)}px;
    top: 0;
    border-top: ${props => (props.theme.size / 2)}px solid #fff;
    border-left: ${props => (props.theme.size / 2)}px solid transparent;
    border-right: ${props => (props.theme.size / 2)}px solid transparent;
  }
`;

caret.defaultProps = {
  theme: {
    caretColor: '#ff0000',
    size: 10,
  },
};

export default caret;
