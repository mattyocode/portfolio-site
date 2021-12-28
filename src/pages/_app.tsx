import type { AppProps } from 'next/app';
// import { polyfill } from 'seamless-scroll-polyfill';

import { GlobalStyles } from '../styles/theme';
import { FontStyles } from '../styles/fonts';

function MyApp({ Component, pageProps }: AppProps) {
  // if (typeof window !== 'undefined') {
  //   polyfill();
  // }
  return (
    <>
      <GlobalStyles />
      <FontStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
