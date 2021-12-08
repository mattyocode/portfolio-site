import styled from 'styled-components';

export const PanelContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

export const PanelBackground = styled.section`
  height: 100vh;
  display: flex;
  /* justify-content: center; */
  scroll-snap-align: start;
`;
