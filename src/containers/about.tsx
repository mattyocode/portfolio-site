import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Centered, Section, FullBleedWrapper } from '../components/sections';
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
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const objectVariants = {
  hidden: {
    y: 250,
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
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      console.log('in view!!');
      controls.start('visible');
    }
    if (!inView) {
      setTimeout(() => {
        console.log('not in view!!');
        controls.start('hidden');
      }, 2000);
    }
  }, [controls, inView]);

  return (
    <Section
      id='about'
      color={
        'linear-gradient(to bottom, #5371CB, #5580F3 20%, #1F45AD 35%, #122968 45%, #4A8F78 60%, #4A8F78 70%)'
      }
    >
      <ObjectWrapper>
        <ObjectContainer>
          <motion.div
            initial='hidden'
            animate={controls}
            variants={objectVariants}
            ref={ref}
          >
            <FullBleedWrapper centered={true}>
              <motion.div
                initial='hidden'
                animate={controls}
                variants={titleVariants}
                ref={ref}
              >
                <PageTitle style={{ position: 'absolute' }}>About Me</PageTitle>
              </motion.div>
              <Image
                src='/img/objectgn.svg'
                alt='green angular structure'
                layout='fill'
                objectPosition='top right'
                objectFit='cover'
                priority
              />
              <Centered rowReverse={false}>
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
                </LongCopy>
              </Centered>
            </FullBleedWrapper>
          </motion.div>
        </ObjectContainer>
      </ObjectWrapper>
    </Section>
  );
}
