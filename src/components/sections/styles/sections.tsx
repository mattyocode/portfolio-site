import React from 'react';
import styled from 'styled-components';

export const SectionContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

type SectionBackgroundProps = { color: string };

export const SectionBackground = styled.section<SectionBackgroundProps>`
  height: 100vh;
  display: flex;
  scroll-snap-align: start;
  background: ${(props) => (props.color ? props.color : '#373F51')};
`;

type ImageWrapperProps = { centered: boolean };

export const ImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: ${(props) => (props.centered ? 'center' : 'flex-end')};
  align-items: ${(props) => (props.centered ? 'center' : 'flex-end')};
`;

type CenteredProps = {
  rowReverse?: boolean;
};

export const CenteredElements = styled.div<CenteredProps>`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: ${(props) => (props.rowReverse ? 'row-reverse' : 'row')};
    padding: 0 2rem;
    max-width: 880px;
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

  @media screen and (min-width: 768px) {
    position: relative;
  }
`;
