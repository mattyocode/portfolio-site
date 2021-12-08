import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #eee;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Open Sans", sans-serif;
    height: 100%;
  }

  body {
    width: 100vw;
  }

  h1 {
    font-family: "Source Sans Pro";
    font-weight: 900;
    font-size: 3rem;
    filter: drop-shadow(3px 3px 0 #E79E3C)
  }
`;
