import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  z-index: 99;
  padding: 0 3rem;
  min-height: 18rem;
  overflow: auto;

  @media screen and (min-width: 440px) {
    background: transparent;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.1rem;
  max-width: 90%;

  @media screen and (min-width: 375px) and (min-height: 625px) {
    grid-gap: 0.3rem;
  }

  @media screen and (min-width: 768px) and (min-height: 625px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem;
  }

  @media screen and (min-width: 1024px) and (min-height: 700px) {
    grid-gap: 1.5rem;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-gap: 2rem;
  }
`;

export const IconWrapper = styled.div`
  max-height: 80px;
  width: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
  object-fit: contain;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 1024px) {
    width: 45px;
    height: 45px;
  }
`;

export const IconText = styled.p`
  font-size: 0.6rem;
  text-align: center;
  vertical-align: baseline;
  margin: 10px;

  @media screen and (min-width: 1024px) and (min-height: 738px) {
    font-size: 0.7rem;
  }
`;
