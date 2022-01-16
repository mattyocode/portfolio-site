import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SectionContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  /* scroll-snap-type: y mandatory; */
  scroll-snap-type: y proximity;
  overflow-y: scroll;
  height: 100vh;
  height: -webkit-fill-available;
`;

type SectionBackgroundProps = { color: string; backgroundImage?: string };

export const SectionBackground = styled.section<SectionBackgroundProps>`
  height: 100vh;
  height: -webkit-fill-available;
  display: flex;
  scroll-snap-align: start;
  background: ${(props) => (props.color ? props.color : '#373F51')};
  background-image: ${(props) =>
    props.backgroundImage ? props.backgroundImage : ''};
`;

type ImageWrapperProps = { centered: boolean };

export const ImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: ${(props) => (props.centered ? 'center' : 'flex-end')};
  align-items: ${(props) => (props.centered ? 'center' : 'flex-end')};

  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

type CenteredProps = {
  rowReverse?: boolean;
};

export const LandingContent = styled.div<CenteredProps>`
  width: 100%;
  height: 67vh; // 70vh prev
  max-height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
  margin-bottom: 5rem;

  @media screen and (min-width: 768px) {
    height: 70vh;
    flex-direction: row-reverse;
    padding: 0 2rem;
    max-width: 880px;
    height: 60vh;
    overflow-y: hidden;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1024px) {
    max-width: 900px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1000px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1050px;
  }
`;

export const AboutContent = styled.div<CenteredProps>`
  width: 100%;
  height: 65%; // 70% prev
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
  margin-bottom: 6rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0 2rem;
    max-width: 880px;
    height: 70vh;
    margin-bottom: 0;
    overflow-y: hidden;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1000px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1100px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1250px;
  }
`;

export const ProfilePic = styled(motion.div)`
  width: 250px;
  height: 250px;
  top: 200px;
`;

type CenteredContentProps = {
  column?: boolean;
};

export const CenteredContent = styled.div<CenteredContentProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  height: -webkit-fill-available;
  margin: 1rem 0;

  flex-direction: ${(props) => (props.column ? 'column' : '')};
  padding: ${(props) => (props.column ? '1rem' : '0')};
  margin-top: ${(props) => (props.column ? '5rem' : '1rem')};

  @media screen and (min-width: 400px) and (min-height: 667px) {
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) and (min-height: 700px) {
    margin-top: 3rem;
  } ;
`;

export const RelativeWrapper = styled.div`
  position: relative;
`;
