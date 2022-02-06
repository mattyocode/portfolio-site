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
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
