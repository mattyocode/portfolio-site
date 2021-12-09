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
  // justify-content: center;
  // align-items: center;
  scroll-snap-align: start;
  background-color: ${(props) => (props.color ? props.color : '#373F51')};
`;

type ImageWrapperProps = { centered: boolean };

export const ImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: ${(props) => (props.centered ? 'center' : 'flex-start')};
  align-items: ${(props) => (props.centered ? 'center' : 'flex-start')};
`;

export const CenteredElements = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    padding: 0 2rem;
    max-width: 880px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export const ProfilePic = styled.div`
  width: 250px;

  @media screen and (min-width: 768px) {
    position: relative;
  }
`;
