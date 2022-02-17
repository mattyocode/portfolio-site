import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --lightaccent: #FF8A66;
    --darkaccent: #1C3057;
  }

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
    background-color: #121D1F;
    overflow-y: auto;
    overflow-x: hidden;
  }

  html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
  }

  /* body {
    width: 100%;
  } */

  h1 {
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 3rem;
    filter: drop-shadow(3px 3px 0 #FF8A66)
  }

  h2 {
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 1.5rem;

    @media screen and (min-width: 330px) {
      font-size: 1.55rem;
    }

    @media screen and (min-width: 350px) {
      font-size: 1.65rem;
    }

    @media screen and (min-width: 365px) {
      font-size: 1.75rem;
    }

    @media screen and (min-width: 425px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h2 > span.coral {
    filter: none;
    filter: drop-shadow(2px 2px 0 #FF8A66)
  }

  span.purple {
    filter: none;
    filter: drop-shadow(2px 2px 0 #6D7EC5)
  }

  h2 > span.black {
    filter: drop-shadow(2px 2px 0 #444)
  }

  p {
    font-family: "Open Sans", sans-serif;
    /* font-weight: bold; */
    margin: 1rem;

    @media screen and (min-width: 1024px) and (min-height: 738px) {
      font-size: 1.1rem;
    }
  }
`;
