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
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    margin-left: 3rem;
  } ;
`;
