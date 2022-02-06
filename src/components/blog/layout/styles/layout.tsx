import styled from 'styled-components';

export const SBlogHomeWrapper = styled.div`
  width: 100vw;
  height: 100%;
  background-image: radial-gradient(circle at 2px 2px, #666 1px, transparent 0);
  background-size: 50px 50px;
  background-color: #121d1f;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CanvasWrapper = styled.div`
  position: relative;
  height: 50vh;
  width: 50rem;
`;

export const SBlogLandingContent = styled.div`
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
    margin-bottom: 0;
    padding: 3rem;
  }
`;

export const SBlogPostsWrapper = styled.div`
  min-height: 20rem;
  padding: 1rem 0;
`;

export const SPostPageWrapper = styled.div`
  padding: 4rem 1.5rem 3rem 1.5rem;
  margin: 0 auto;
  max-width: 90vw;

  @media screen and (min-width: 768px) {
    max-width: 700px;
  }

  & > h1 {
    filter: none;
  }

  & > p {
    font-size: 1rem;
    margin: 2rem 0;
  }
`;
