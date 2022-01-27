import type { AppProps } from 'next/app';
import * as smoothscroll from 'smoothscroll-polyfill';
import { GlobalStyles } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    smoothscroll.polyfill();
  }
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
