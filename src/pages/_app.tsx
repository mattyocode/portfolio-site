import type { AppProps } from 'next/app';
import * as smoothscroll from 'smoothscroll-polyfill';
import { GlobalStyles } from '../styles/theme';
import { FontStyles } from '../styles/fonts';

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    console.log('polyfilled');
    smoothscroll.polyfill();
    // window.__forceSmoothScrollPolyfill__ = true;
  }
  return (
    <>
      <GlobalStyles />
      <FontStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
