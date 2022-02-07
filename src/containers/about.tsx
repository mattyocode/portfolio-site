import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useWindowDimensions from '../helpers/useWindowDimensions';
import {
  AboutContent,
  CenterIcon,
  Section,
  FullBleedWrapper,
} from '../components/layout';
import { LongCopy, PageTitle } from '../components/heading';
import { ObjectContainer, ObjectWrapper } from '../components/object';
import IconGrid, { SingleSmallIcon } from '../components/icon-grid';
import { aboutIcons } from '../data/about-icons';

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
  const [showMoreIcon, setShowMoreIcon] = useState<boolean>(true);
  const [wideScreen, setWideScreen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const {
    ref: titleRef,
    inView: titleInView,
    entry: titleEntry,
  } = useInView({ threshold: 0.5 });
  const { width } = useWindowDimensions();

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const atBottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      e.currentTarget.clientHeight;
    if (atBottom) {
      setShowMoreIcon(!atBottom);
    } else {
      setShowMoreIcon(true);
    }
  };

  const scrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (contentRef.current) {
      contentRef.current.scrollBy({
        top: 200,
        behavior: 'smooth',
      });
    }
  };

  let moreIcon;

  useEffect(() => {
    if (width && width >= 768) {
      setShowMoreIcon(false);
    }
  }, [width]);

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
              <AboutContent ref={contentRef} onScroll={handleScroll}>
                <LongCopy data-testid='about-copy'>
                  <p>
                    I use JavaScript and Python to create full-stack web apps
                    that solve problems and are fun to use. I&apos;m currently
                    delving into Next.js and making my way through “Uncle
                    Bob”&apos;s <i>Clean Code</i>.
                  </p>

                  <p>
                    I have professional experience of gathering, cleaning and
                    structuring data with Python, Node and, PostgreSQL, and
                    using libraries such as Pandas, Matplotlib, and SpaCy to
                    analyse natural language for trends insights.
                  </p>

                  <p>
                    Prior to moving into development, I worked as a consultant
                    at a cultural insights agency helping global brands create
                    comms, experiences, and innovations that resonate with their
                    users. As a life-long tech enthusiast, I had the pleasure of
                    working clients including Microsoft, Twitch, Dashlane, and a
                    number of FAANG companies.
                  </p>

                  <p>
                    Now my goal is to bring an understanding of product users to
                    the granular detail of the codebase.
                  </p>
                </LongCopy>
                <IconGrid icons={aboutIcons} />
              </AboutContent>
              <CenterIcon>
                {showMoreIcon && (
                  <SingleSmallIcon
                    src='/icons/chevron-down.svg'
                    label='more'
                    clickHandler={scrollDown}
                  />
                )}
              </CenterIcon>
            </FullBleedWrapper>
          </motion.div>
        </ObjectContainer>
      </ObjectWrapper>
    </Section>
  );
}
