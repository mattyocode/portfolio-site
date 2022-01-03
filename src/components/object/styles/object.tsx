import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  transform: translateZ(0); // Safari overflow bugfix
`;

export const Container = styled.div`
  position: relative;
  top: 1rem;
  left: 0;

  /* overflow: scroll; */
  overflow: hidden;
  z-index: 20;

  @media screen and (min-width: 570px) {
    overflow: hidden;
  }
`;
