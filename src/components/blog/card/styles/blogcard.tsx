import styled from 'styled-components';

export const SWrapper = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90vw;
  height: 25vh;
  min-width: 15rem;
  min-height: 12rem;
  max-width: 34rem;
  max-height: 18rem;
  background-color: #121d1f;
  filter: drop-shadow(3px 3px 0 #6d7ec5);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #1c2d30;
  }

  &:active {
    background-color: #0e1718;
    filter: drop-shadow(3px 3px 0 #121d1f);
  }

  @media screen and (min-width: 425px) {
    padding: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    height: 28vh;
    padding: 0.75rem;
  }
  @media screen and (min-width: 1440px) {
    font-size: 0.9rem;
    height: 32vh;
    max-width: 38rem;
    max-height: 20rem;
  }
`;

export const SImageWrapper = styled.div`
  display: none;

  @media screen and (min-width: 425px) {
    display: block;
    position: relative;
    padding: 0.5rem;
  }
`;

export const SContentWrapper = styled.div`
  margin: 0.5rem 0.75rem;

  & > * {
    margin: 0.25rem;

    @media screen and (min-width: 425px) {
      margin: 0.5rem 0.25rem;
    }

    @media screen and (min-width: 768px) {
      margin: 0.75rem 0.75rem;
    }
  }
`;

export const SDate = styled.h5`
  font-size: 0.6rem;
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 1440px) {
    font-size: 0.9rem;
  }
`;

export const STitle = styled.h3`
  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
  @media screen and (min-width: 1440px) {
    font-size: 1.5rem;
  }
`;

export const SBodyCopy = styled.p`
  font-size: 0.8rem;
  @media screen and (min-width: 1440px) {
    font-size: 0.9rem;
  }
`;

export const STags = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0;
`;

export const STag = styled.p`
  font-size: 0.6rem;
  margin: 0.5rem 0.3rem;
  padding: 0.2rem 0.4rem;
  border: 1px solid #eee;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    font-size: 0.7rem;
  }
`;
