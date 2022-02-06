import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as smoothscroll from 'smoothscroll-polyfill';
import { GlobalStyles } from '../styles/theme';
import { AnimatePresence, motion } from 'framer-motion';

const pageTransitionVariants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1, duration: 1 },
  exit: {
    opacity: 0,
    duration: 1,
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    smoothscroll.polyfill();
  }
  return (
    <>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          key={router.route}
          variants={pageTransitionVariants}
          initial='hidden'
          animate='enter'
          exit='exit'
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
