import React from 'react';
import styled from 'styled-components';

export const SectionContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  scroll-snap-type: y mandatory;
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

export const AboutContent = styled.div<CenteredProps>`
  width: 100%;
  height: 60%; // 70% prev
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll; // added

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0 2rem;
    max-width: 880px;
    height: 70vh;
  }

  @media screen and (min-width: 768px) and (min-height: 738px) {
    overflow-y: hidden;
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

export const LandingContent = styled.div<CenteredProps>`
  width: 100%;
  height: 70vh; // 70vh prev
  max-height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto; // added

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    padding: 0 2rem;
    max-width: 880px;
    height: 60vh;
    overflow-y: hidden;
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

export const ProfilePic = styled.div`
  width: 250px;
  top: 200px;
`;

export const CenteredContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  height: -webkit-fill-available;
  margin-top: 1rem;

  @media screen and (min-width: 400px) and (min-height: 667px) {
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) and (min-height: 800px) {
    margin-top: 3rem;
  } ;
`;
