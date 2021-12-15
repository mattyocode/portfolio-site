import styled from 'styled-components';

export const Container = styled.div`
  z-index: 99;
  padding: 0 3rem;
  max-width: 90%;
  min-height: 20rem;
  padding: 1rem;
  overflow-x: auto;

  @media screen and (min-width: 768px) {
    overflow-x: hidden;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  @media screen and (min-width: 1024px) {
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;

  @media screen and (min-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

export const IconText = styled.p`
  font-size: 0.6rem;
  text-align: center;
  margin-top: 15px;

  @media screen and (min-width: 768px) {
    font-size: 0.7rem;
  }
`;
