import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  #root {
    height: 100%;s
  }

  input:focus {
    outline: none;
  }
`;

export default GlobalStyles;
