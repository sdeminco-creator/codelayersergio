import { createGlobalStyle } from './styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Figma Sans VF:Regular';
    src: url('/fonts/Figma_Sans_VF-Regular.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Inter:Bold';
    src: url('https://static.figma.com/font/Inter_1') format('woff2');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Inter:Medium';
    src: url('https://static.figma.com/font/Inter_1') format('woff2');
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Inter:Regular';
    src: url('https://static.figma.com/font/Inter_1') format('woff2');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Inter:Semi Bold';
    src: url('https://static.figma.com/font/Inter_1') format('woff2');
    font-style: normal;
    font-weight: 600;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Inter:Regular', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button,
  input {
    font: inherit;
  }

  button {
    color: inherit;
  }
`;

export default GlobalStyle;
