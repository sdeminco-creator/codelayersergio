export interface StyleClosetTheme {
  colors: { [key in keyof typeof colors]: string };
  breakpoints: { [key in keyof typeof breakpoints]: string };
}

const colors = {
  primary: '#1b1a20',
  secondary: '#eabf00',
  white: '#ffffff',
  surface: '#f7f7f5',
  border: '#dedede',
  muted: '#777777',
  soft: '#aaaaaa',
};

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1025px',
};

const theme: StyleClosetTheme = {
  colors,
  breakpoints,
};

export { theme };
