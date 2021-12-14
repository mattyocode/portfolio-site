import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  /* height: 100%; */
  overflow: hidden;
  transform: translateZ(0); // Safari overflow bugfix
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  overflow: auto;
  z-index: 20;

  @media screen and (min-width: 570) {
    overflow: hidden;
  }
`;
