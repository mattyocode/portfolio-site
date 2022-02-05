import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as smoothscroll from 'smoothscroll-polyfill';
import { GlobalStyles } from '../styles/theme';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router);
  if (typeof window !== 'undefined') {
    smoothscroll.polyfill();
  }
  return (
    <>
      <GlobalStyles />
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
