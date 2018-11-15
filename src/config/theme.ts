const blue:string = '#4da1ff';
const gray:string = '#f3f3f3';
const lightgray:string = '#fafbfc';
const lightergray:string = '#fcfcfc';
const darkgray:string = '#ccc';
const darkergray:string = '#999';
const darkestgray:string = '#333';
const placeholdergray:string = '#323c47';
const turquoise:string = '#0ab';

const space = [0, 4, 8, 16, 32, 64, 128, 256];
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64];
const headerHeight = 73;
const radiusSizes = [4, 25];

export default {
  fontSizes,
  radiusSizes,
  space,
  colors: {
    blue,
    gray,
    lightgray,
    lightergray,
    darkgray,
    darkergray,
    darkestgray,
    placeholdergray,
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
    default: {
      color: darkestgray,
      fontWeight: 'normal',
      backgroundColor: 'white',
      position: 'relative',      
      boxShadow: `${gray} 0 0 0 1px`,
      '&:hover': {
        boxShadow: `${darkgray} 0 0 0 1px`,
      },
      '&:focus': {
        boxShadow: `${darkestgray} 0 0 0 1px`,
      },
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