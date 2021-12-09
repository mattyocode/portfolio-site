import styled from 'styled-components';

export const Title = styled.h1`
  z-index: 10;
  position: relative;
  left: 1rem;
  top: 3rem;

  @media screen and (min-width: 768px) {
    left: 2rem;
  }

  @media screen and (min-width: 1024px) {
    top: 4rem;
    left: 5rem;
  }
`;

export const Landing = styled.div`
  position: absolute;
  bottom: 15%;
  padding: 2rem;

  @media screen and (min-width: 768px) {
    bottom: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } ;
`;
