import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Centered, Section, FullBleedWrapper } from '../components/sections';
import { LongCopy, PageTitle } from '../components/heading';
import { ObjectContainer, ObjectWrapper } from '../components/object';
import IconGrid from '../components/icon-grid';
import { icons } from '../components/icon-grid/icon-data';

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

export default function AboutSection(): JSX.Element {
  const controls = useAnimation();
  const {
    ref: titleRef,
    inView: titleInView,
    entry: titleEntry,
  } = useInView({ threshold: 0.2 });
  const {
    ref: iconsRef,
    inView: iconsInView,
    entry,
  } = useInView({
    threshold: 0.2,
  });

  // console.log('entry >>', titleEntry);

  useEffect(() => {
    if (titleInView) {
      controls.start('visible');
    }
    if (entry && entry.intersectionRatio === 0) {
      controls.start('hidden');
    }
  }, [controls, titleInView, entry]);

  let backgroundGradient =
    'linear-gradient(to bottom, #5371CB, #5580F3 20%, #1F45AD 35%, #122968 60%, #4A8F78 75%, #4A8F78 80%)';

  return (
    <Section id='about' color={backgroundGradient}>
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
                objectPosition='right'
                objectFit='cover'
                priority
              />
              <Centered>
                <LongCopy>
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
              </Centered>
            </FullBleedWrapper>
          </motion.div>
        </ObjectContainer>
      </ObjectWrapper>
    </Section>
  );
}
