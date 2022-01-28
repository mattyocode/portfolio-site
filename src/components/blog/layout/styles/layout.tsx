import styled from 'styled-components';

export const SBlogHomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-image: linear-gradient(
    to bottom,
    #4e6dca,
    #7e88c3 70%,
    #5371cb 90%
  ); */
  background-image: radial-gradient(circle at 2px 2px, #666 1px, transparent 0);
  background-size: 50px 50px;
  background-color: #373f51;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CanvasWrapper = styled.div`
  position: relative;
  height: 50vh;
  width: 35rem;
`;

export const SBlogLandingContent = styled.div`
  /* width: 100%;
  height: 67vh;
  max-height: 32rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  margin-bottom: 5rem;

  @media screen and (min-width: 768px) {
    height: 80vh;
    flex-direction: row-reverse;
    padding: 0 2rem;
    /* max-width: 880px; */
    /* height: 60vh; */
    /* overflow-y: hidden; */
    margin-bottom: 0;
  }

  /* @media screen and (min-width: 1024px) {
    max-width: 900px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1000px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 140px;
  } */
`;
