import styledComponents from 'styled-components';
import { Box } from 'rebass';
import { theme } from '../../config';

/**
 * Creates a progress bar with configurable width.
 */
const progressBar = styledComponents(Box)`
  background: ${theme.colors.skyblue};
  border-radius: ${theme.radiusSizes[1]}px;
  height: 5px;
  position: relative;

  &:before {
    content: '';
    background: ${theme.colors.blue};
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    width: ${props => props.theme.indicatorWidth};
  }
`;

progressBar.defaultProps = {
  theme: {
    indicatorWidth: '100px',
  },
};

export default progressBar;
