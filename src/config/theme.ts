const blue:string = '#07c';
const gray:string = '#f3f3f3';
const lightgray:string = '#fafbfc';
const lightergray:string = '#fcfcfc';
const darkgray:string = '#999';
const turquoise:string = '#0ab';

const space = [0, 4, 8, 16, 32, 64, 128, 256];
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64];
const headerHeight = 73;

export default {
  fontSizes,
  space,
  colors: {
    blue,
    gray,
    lightgray,
    lightergray,
    darkgray,
    turquoise,
  },
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  Heading: {
    fontFamily: '"Montserrat", sans-serif',
    lineHeight: 1.25,
  },
  Text: {
    fontFamily: '"Montserrat", sans-serif',
    lineHeight: 1.25,
  },
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: blue,
    },
    outline: {
      color: blue,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
    transparent: {
      backgroundColor: 'transparent',
      color: 'black',
    },
    transparentSmall: {
      backgroundColor: '#fcfcfc',
      color: 'black',
      padding: space[0],
    },
  },
  Header: {
    height: headerHeight,
  },
};
