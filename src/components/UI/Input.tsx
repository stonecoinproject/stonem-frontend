import styledComponents, { keyframes } from 'styled-components';
import theme from '../../config/theme';

const borders = ({ color, theme }:any) => {
  const borderColor = color ? theme.colors[color] : theme.colors.borderGray;
  const hoverColor = theme.colors.darkgray;
  const focusColor = theme.colors.darkestgray;
  return {
    'border-color': borderColor,
    'box-shadow': `0 0 0 1px ${borderColor}`,
    ':hover': {
      'border-color': hoverColor,
      'box-shadow': `0 0 0 1px ${hoverColor}`,
    },
    ':focus': {
      outline: 0,
      'border-color': focusColor,
      'box-shadow': `0 0 0 1px ${focusColor}`,
    },
  };
};

const Input = styledComponents.input`
  appearance: none;
  display: block;
  width: 100%;
  font-family: ${theme.fonts.sans};
  color: inherit;
  font-size: ${theme.fontSizes[1]}px;
  background-color: transparent;
  border-radius: ${theme.radiusSizes[0]}px;
  border-width: 0px;
  border-style: solid;
  border-color: ${theme.colors.lightgray};

  padding: ${theme.space[2]}px ${theme.space[3]}px;
  margin: 0;

  ::placeholder {
    color: ${theme.colors.placeholdergray};
    opacity: 0.4;
  }

  ::-ms-clear {
    display: none;
  }

  ${({ color }) => borders({ color, theme })}
`;

Input.displayName = 'Input';
Input.defaultProps = {
  color: 'gray',
};

export default Input;
