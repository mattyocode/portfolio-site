import styled from 'styled-components';
import { motion } from 'framer-motion';

type TitleProps = {
  raised?: boolean;
};

export const Title = styled.h1<TitleProps>`
  z-index: 80;
  position: absolute;
  left: 1.5rem;
  top: ${(props) => (props.raised ? '0rem' : '2.5rem')};
  text-align: left;

  @media screen and (max-height: 568px) {
    display: none;
  }

  @media screen and (min-height: 660px) {
    height: 2rem;
    left: 2rem;
    top: ${(props) => (props.raised ? '1rem' : '3rem')};
  }

  @media screen and (min-width: 1024px) {
    top: ${(props) => (props.raised ? '1rem' : '4rem')};
    left: 5rem;
  }

  @media screen and (min-width: 2000px) {
    top: ${(props) => (props.raised ? '1rem' : '4rem')};
    left: 20rem;
  }
`;

export const Landing = styled(motion.div)`
  padding: 2rem;

  @media screen and (min-width: 768px) {
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } ;
`;

export const BodyCopy = styled.div`
  z-index: 80;
  padding: 0rem 0.75rem;
  max-width: 30rem;
  font-weight: 600;

  @media screen and (min-width: 768px) and (max-height: 660px) {
    font-size: 0.9rem;
  }

  @media screen and (min-width: 768px) {
    padding: 2rem 0.75rem;
    max-width: 35rem;
  }
`;

export const SJumboTitle = styled.h1`
  font-size: 12rem;
`;
