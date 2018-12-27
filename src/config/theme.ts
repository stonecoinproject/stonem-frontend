const blue:string = '#4da1ff';
const skyblue:string = '#eaf4ff';
const gray:string = '#f3f3f3';
const lightred:string = '#f4bcb1';
const warningred:string = '#ffb4b6';
const warningredtext:string = '#d0021b';
const red:string = '#f54323';
const coolgray:string = '#cacdd1';
const lightgray:string = '#fafbfc';
const lightergray:string = '#fcfcfc';
const green:string = '#7ed321';
const lightgreen:string = '#aadfbf';
const lilac:string = '#dfaaaa';
const darkgray:string = '#ccc';
const darkergray:string = '#999';
const darkestgray:string = '#333';
const lightorange:string = '#f4dbb1';
const orange:string = '#f5a623';
const placeholdergray:string = '#323c47';
const copywritegray:string = '#9b9b9b';
const subemphasisedgray:string = '#989898';
const turquoise:string = '#0ab';

const headerHeight = 73;
const sidebarWidth = 70;

const space = [0, 4, 8, 16, 32, 64, 128, 256];
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64];
const radiusSizes = [4, 6, 25];
const zIndexScale = [-100, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

type ColorsInterface = {
  [blue:string]: string,
  skyblue: string,
  gray: string,
  lightred: string,
  red: string,
  coolgray: string,
  lightgray: string,
  lightergray: string,
  green: string,
  lightgreen: string,
  lilac: string,
  darkgray: string,
  darkergray: string,
  darkestgray: string,
  lightorange: string,
  orange: string,
  placeholdergray: string,
  copywritegray: string,
  subemphasisedgray: string,
  turquoise: string,
};

type ThemeInterface = {
  fontSizes: any,
  radiusSizes: any,
  space: any,
  colors : ColorsInterface,
  fonts: any,
  shadows: any,
  Heading: any,
  Header: any,
  Sidebar: any,
  Text: any,
  buttons: any,
};
const theme:ThemeInterface = {
  fontSizes,
  radiusSizes,
  space,
  colors: {
    skyblue,
    blue,
    gray,
    lightred,
    red,
    coolgray,
    lightgray,
    lightergray,
    green,
    lightgreen,
    lilac,
    darkgray,
    darkergray,
    darkestgray,
    lightorange,
    orange,
    placeholdergray,
    copywritegray,
    subemphasisedgray,
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
    letterSpacing: 0.3,
    lineHeight: 1.25,
  },
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: blue,
    },
    primaryLarge: {
      color: '#fff',
      backgroundColor: blue,
      padding: `${space[3]}px ${space[5]}px`,
      fontWeight: 'normal',
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
    outlineDefault: {
      color: blue,
      backgroundColor: 'white',
      boxShadow: '0 0 2px 1px',
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
    warning: {
      backgroundColor: warningred,
      color: warningredtext,
    },
  },
  Header: {
    height: headerHeight,
    zIndex: zIndexScale[7],
  },
  Sidebar: {
    width: sidebarWidth,
    zIndex: zIndexScale[7],
  },
};

export default theme;
