import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px #ff8a65 solid;
  border-radius: 5px;
  margin: 1rem;
  max-width: 30rem;
  height: 100%;
  background: #373f51;
  filter: drop-shadow(15px 15px 4px #333);

  @media screen and (min-height: 668px) {
    padding: 0.2rem;
    /* max-height: 32rem; */
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin: 0.5rem;
  height: 10rem;
  width: 14rem;

  @media screen and (min-height: 668px) {
    height: 12rem;
    width: 16rem;
  }

  @media screen and (min-height: 730px) {
    height: 14rem;
    width: 18rem;
  }
`;

export const TextWrapper = styled.div``;

export const Title = styled.h3`
  text-align: center;
  @media screen and (min-height: 668px) {
    margin: 1rem;
  }
`;

export const BodyCopy = styled.p`
  font-size: 0.7rem;
  margin: 0.5rem 1rem;

  @media screen and (min-height: 668px) {
    font-size: 0.8rem;
    margin: 1rem;
  }
`;

export const Footer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 5px;
  object-fit: contain;

  @media screen and (min-width: 375px) and (min-height: 660px) {
    width: 30px;
    height: 30px;
  }
`;

export const Icons = styled.div`
  display: flex;
`;

export const LinkIcons = styled.div`
  display: flex;
`;
