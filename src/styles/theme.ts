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

  h2 {
    font-family: "Source Sans Pro";
    font-weight: 900;
    font-size: 1.5rem;

    @media screen and (min-width: 425px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }

  h2 > span.coral {
    filter: none;
    filter: drop-shadow(2px 2px 0 #FF8A66)
  }

  h2 > span.black {
    filter: drop-shadow(2px 2px 0 #444)
  }
`;
