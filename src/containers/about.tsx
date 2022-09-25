import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useWindowDimensions from '../helpers/useWindowDimensions';
import {
  AboutContent,
  Section,
  FullBleedWrapper,
  AboutGraphic
} from '../components/layout';
import { LongCopy, PageTitle } from '../components/heading';
import { ObjectContainer, ObjectWrapper } from '../components/object';

const titleVariants = {
  hidden: {
    scale: 0.6,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

const objectVariants = {
  hidden: {
    y: 200,
  },
  visible: {
    y: 50,
    transition: {
      y: { type: 'spring', stiffness: 100 },
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

type Props = {
  navRef: React.RefObject<any> | ((node?: Element | null) => void);
  isActive: boolean;
};

export default function AboutSection({ navRef, isActive }: Props): JSX.Element {
  const [wideScreen, setWideScreen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const {
    ref: titleRef,
    inView: titleInView,
    entry: titleEntry,
  } = useInView({ threshold: 0.5 });
  const { width } = useWindowDimensions();


  const scrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (contentRef.current) {
      contentRef.current.scrollBy({
        top: 200,
        behavior: 'smooth',
      });
    }
  };


  useEffect(() => {
    if (titleInView) {
      controls.start('visible');
    }
    if (titleEntry && titleEntry.intersectionRatio === 0) {
      controls.start('hidden');
    }
  }, [controls, titleInView, titleEntry]);

  useEffect(() => {
    if (!isActive && width && width < 768 && contentRef.current) {
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.scrollTop = 0;
        }
      }, 500);
    }
  }, [isActive, width]);

  useEffect(() => {
    if (width && width >= 768) {
      setWideScreen(true);
    } else {
      setWideScreen(false);
    }
  }, [width]);

  const backgroundGradient =
    'linear-gradient(to bottom, #5371CB, #5580F3 20%, #1F45AD 35%, #122968 60%, #4A8F78 75%, #4A8F78 80%)';

  return (
    <Section ref={navRef} id='about' color={backgroundGradient}>
      <ObjectWrapper>
        <ObjectContainer>
          <motion.div
            initial='hidden'
            animate={controls}
            variants={objectVariants}
            ref={titleRef}
          >
            <FullBleedWrapper centered={true} flexRow={false}>
              <motion.div
                initial='hidden'
                animate={controls}
                variants={titleVariants}
              >
                <PageTitle raised={true}>About Me</PageTitle>
              </motion.div>
              <Image
                src='/img/objectgn4.svg'
                alt='green angular structure'
                layout='fill'
                objectPosition={wideScreen ? 'top right' : 'top'}
                objectFit='cover'
                priority
              />
              <AboutContent ref={contentRef}>
                <LongCopy data-testid='about-copy'>
                  <p>
                  By day, I use Python and Javascript to build, deploy, 
                  and maintain performant web applications that provide intuitive 
                  and time-saving features for 10,000s daily business users. 
                  Outside of work, I like to build things with Next.js, experiment with my 
                  homelab setup, and generally explore the world of code, the web, 
                  and technology trends.
                  </p>

                  <p>
                  Before moving into development, I was a consultant at an insights 
                  agency, where I provided guidance on innovation, UX, and communications, 
                  helping global brands anticipate the changing needs of their consumers. 
                  During that time, I worked primarily with technology clients, such as 
                  Microsoft, Twitch, and Dashlane.
                  </p>

                  <p>
                  My goal is to combine these areas of expertise and bring experience of 
                  researching users to the granular detail of the product.
                  </p>
                </LongCopy>
                {wideScreen  && <AboutGraphic src="/img/browser-code-gn.svg" alt="Browser with code brackets"/>}
              </AboutContent>
            </FullBleedWrapper>
          </motion.div>
        </ObjectContainer>
      </ObjectWrapper>
    </Section>
  );
}
