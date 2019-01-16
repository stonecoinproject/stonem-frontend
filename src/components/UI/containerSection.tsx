import { theme } from '../../config';
import styledComponents from 'styled-components';
import { Box } from 'rebass';

const containerSection = styledComponents(Box)`
  background: white;
  margin: ${theme.space[4]}px ${theme.space[2]}px;
  padding: ${theme.space[3]}px ${theme.space[2]}px;
  height: 95%;
  border-radius: ${theme.radiusSizes[1]}px;
`;

export default containerSection;
