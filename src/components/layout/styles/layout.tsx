import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SPageWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  scroll-snap-type: y proximity;
  overflow-y: auto;
  height: 100vh;
  /* width: 100vw; */
  height: -webkit-fill-available;
`;

type SSectionProps = {
  color?: string;
  backgroundImage?: string;
  cover?: boolean;
};

export const SSection = styled.section<SSectionProps>`
  height: 100vh;
  width: 100vw;
  height: -webkit-fill-available;
  display: flex;
  scroll-snap-align: start;
  background: ${(props) => (props.color ? props.color : '#373F51')};
  background-image: ${(props) =>
    props.backgroundImage ? props.backgroundImage : ''};

  background-size: ${(props) => (props.cover ? 'cover' : '')};
  background-position: ${(props) => (props.backgroundImage ? 'bottom' : '')};

  min-height: 600px;
`;

type SFullBleedWrapperProps = { centered: boolean; flexRow: boolean };

export const SFullBleedWrapper = styled.div<SFullBleedWrapperProps>`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.centered ? 'center' : 'flex-end')};
  align-items: ${(props) => (props.centered ? 'center' : 'flex-end')};
  flex-direction: ${(props) => (props.flexRow ? 'row' : 'column')};
  min-height: 550px;

  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

type CenteredProps = {
  rowReverse?: boolean;
  flexRow?: string;
};

export const SLandingContent = styled.div<CenteredProps>`
  width: 100%;
  height: 67vh;
  max-height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
  overflow-y: visible;
  margin-bottom: 5rem;

  @media screen and (min-width: 768px) {
    height: 70vh;
    flex-direction: ${(props) =>
      props.flexRow ? props.flexRow : 'row-reverse'};
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

export const SAboutContent = styled.div<CenteredProps>`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll;
  margin: 0;
  font-size: 0.8rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0 2rem;
    max-width: 880px;
    height: 36rem;
    margin-left: 5rem;
    overflow-y: auto;
    font-size: 1.25rem;
  }

  @media screen and (min-width: 768px) and (min-height: 780px) {
    margin-top: 3rem;
    overflow-y: hidden;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 3rem;
    max-width: 1000px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1100px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1250px;
  }
`;

export const SProfilePicWrapper = styled(motion.div)`
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
  margin-top: ${(props) => (props.column ? '3rem' : '1rem')};

  @media screen and (min-width: 400px) and (min-height: 667px) {
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) and (min-height: 700px) {
    margin-top: 5rem;
  } ;
`;

export const RelativeWrapper = styled.div`
  position: relative;
`;

export const SCenterIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
  min-height: 20px;
`;
