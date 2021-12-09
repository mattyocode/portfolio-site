import styled from 'styled-components';

export const Title = styled.h1`
  position: relative;
  left: 2rem;
  top: 3rem;
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
