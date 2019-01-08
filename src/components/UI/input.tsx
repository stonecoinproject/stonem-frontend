import styledComponents, { keyframes } from 'styled-components';
import { default as appTheme } from '../../config/theme';

const borders = ({ color, appTheme, focusHighlight }:any) => {
  const borderColor = color ? appTheme.colors[color] : appTheme.colors.borderGray;
  const hoverColor = appTheme.colors.darkgray;
  const focusColor = focusHighlight ? appTheme.colors[focusHighlight] : appTheme.colors.darkestgray;
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

const input = styledComponents.input`
  appearance: none;
  display: block;
  width: 100%;
  font-family: ${appTheme.fonts.sans};
  color: inherit;
  font-size: ${props => appTheme.fontSizes[props.theme.fontSize]}px;
  background-color: transparent;
  border-radius: ${appTheme.radiusSizes[0]}px;
  border-width: 0px;
  border-style: solid;
  border-color: ${appTheme.colors.lightgray};

  padding: ${props => appTheme.space[props.theme.size]}px ${props => appTheme.space[props.theme.size] * 2}px;
  margin: 0;

  ::placeholder {
    color: ${appTheme.colors.placeholdergray};
    opacity: 0.4;
  }

  ::-ms-clear {
    display: none;
  }

  ${({ theme: { focusHighlight }, color }) => borders({ color, appTheme, focusHighlight })}
`;

input.displayName = 'Input';
input.defaultProps = {
  color: 'gray',
  theme: {
    size: 2,
    focusHighlight: appTheme.colors.darkgray,
    fontSize: 1,
  },
};

export default input;
