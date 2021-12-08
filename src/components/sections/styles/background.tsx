import styled from 'styled-components';

export const SectionContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

type SectionBackground = { color: string };

export const SectionBackground = styled.section<SectionBackground>`
  height: 100vh;
  display: flex;
  // justify-content: center;
  // align-items: center;
  scroll-snap-align: start;
  background-color: ${(props) => (props.color ? props.color : '#373F51')};
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;

  @media and screen (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
