import React, { useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {
  HorizontalBackLink,
  HoriztonalBackBtnWrapper,
  VerticalBackBtnWrapper,
  VerticalBackLink,
  BtnIcon,
  BtnText,
  BtnTextSmall,
} from './styles/nav-icons';

export const PageBack = ({
  src,
  href,
  borderColor = undefined,
  children,
  ...restProps
}: {
  src: string;
  href: string;
  borderColor?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} scroll={true} passHref>
      <HoriztonalBackBtnWrapper {...restProps}>
        <HorizontalBackLink borderColor={borderColor}>
          <BtnIcon src={src} />
          <BtnText>{children}</BtnText>
        </HorizontalBackLink>
      </HoriztonalBackBtnWrapper>
    </Link>
  );
};

const pageTopVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.6 },
  enter: { opacity: 1, y: 0, scale: 1, duration: 1 },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.7,
    duration: 1,
  },
};

export const PageTop = ({
  src,
  href,
  show = false,
  children,
  ...restProps
}: {
  src: string;
  href: string;
  show?: boolean;
  borderColor?: string | undefined;
  children: React.ReactNode;
}) => {
  const handleClick = useCallback(
    (e) => {
      if ((href as string).startsWith('#')) {
        e.preventDefault();
        const destination = document.querySelector(href as string);
        if (destination) {
          destination.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          });
        }
      }
    },
    [href]
  );
  return (
    <AnimatePresence>
      {show && (
        <Link href={href} scroll={true} passHref>
          <VerticalBackBtnWrapper
            key='pagetop'
            variants={pageTopVariants}
            initial='hidden'
            animate='enter'
            exit='exit'
            {...restProps}
          >
            <VerticalBackLink onClick={handleClick} onKeyDown={handleClick}>
              <BtnIcon src={src} />
            </VerticalBackLink>
            <BtnTextSmall>{children}</BtnTextSmall>
          </VerticalBackBtnWrapper>
        </Link>
      )}
    </AnimatePresence>
  );
};
