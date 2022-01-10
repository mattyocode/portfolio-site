import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useWindowDimensions from '../helpers/useWindowDimensions';
import { AboutCentered, Section, FullBleedWrapper } from '../components/layout';
import { LongCopy, PageTitle } from '../components/heading';
import { ObjectContainer, ObjectWrapper } from '../components/object';
import IconGrid from '../components/icon-grid';
import { icons } from '../data/icons';

const titleVariants = {
  hidden: {
    scale: 0.6,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
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
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const {
    ref: titleRef,
    inView: titleInView,
    entry: titleEntry,
  } = useInView({ threshold: 0.2 });
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (titleInView) {
      controls.start('visible');
    }
    if (titleEntry && titleEntry.intersectionRatio === 0) {
      controls.start('hidden');
    }
  }, [controls, titleInView, titleEntry]);

  useEffect(() => {
    if (!isActive && width < 768 && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [isActive, width]);

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
            <FullBleedWrapper centered={true}>
              <motion.div
                initial='hidden'
                animate={controls}
                variants={titleVariants}
              >
                <PageTitle raised={true}>About Me</PageTitle>
              </motion.div>
              <Image
                src='/img/objectgn2.svg'
                alt='green angular structure'
                layout='fill'
                objectPosition='top right'
                objectFit='cover'
                priority
              />
              <AboutCentered ref={contentRef}>
                <LongCopy data-testid='about-copy'>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>

                  <p>
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua.
                  </p>

                  <p>
                    Consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum.
                  </p>
                </LongCopy>
                <IconGrid icons={icons} />
              </AboutCentered>
            </FullBleedWrapper>
          </motion.div>
        </ObjectContainer>
      </ObjectWrapper>
    </Section>
  );
}
