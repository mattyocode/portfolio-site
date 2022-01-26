import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 3px #ff8a65 solid;
  border-radius: 5px;
  margin: auto;
  padding: 0.1rem;
  height: 100%;
  max-width: 90vw;
  background: #373f51;
  filter: drop-shadow(15px 15px 4px #333);
  @media screen and (min-width: 410px) {
    max-width: 22rem;
  }
  @media screen and (min-width: 850px) {
    max-width: 26rem;
  }
  @media screen and (min-width: 1000px) {
    max-width: 28rem;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  margin: 0.5rem;
  height: 12rem;
  width: 16rem;

  @media screen and (max-width: 280px) {
    height: 10rem;
    width: 10rem;
  }

  @media screen and (min-width: 350px) and (min-height: 700px) {
    height: 13rem;
    width: 17rem;
  }
  @media screen and (min-width: 350px) and (min-height: 800px) {
    height: 14rem;
    width: 19rem;
  }

  @media screen and (min-width: 1000px) and (min-height: 900px) {
    height: 17rem;
    width: 23rem;
  }
`;

type ImageOpacityProps = {
  opacity: string;
};

export const ImageOpacity = styled.div<ImageOpacityProps>`
  opacity: ${(props) => props.opacity || '1'};
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Video = styled.video`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
`;

export const TextWrapper = styled.div``;

export const Title = styled.h3`
  text-align: center;

  @media screen and (min-height: 668px) {
    margin: 0.5rem;
  }

  @media screen and (min-width: 450px) and (min-height: 668px) {
    font-size: 1.2rem;
  }
`;

export const BodyCopy = styled.p`
  font-size: 0.8rem;
  margin: 0.5rem 1rem;

  @media screen and (max-width: 280px) {
    font-size: 0.7rem;
    margin: 0.5rem;
  }

  @media screen and (min-height: 668px) {
    font-size: 0.9rem;
    margin: 0.5rem;
  }

  /* @media screen and (min-width: 550px) and (min-height: 730px) {
    font-size: 1rem;
    margin: 0.7rem;
  } */
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

export const Icons = styled.div`
  display: flex;
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin: 5px;
  object-fit: contain;

  @media screen and (min-width: 375px) and (min-height: 660px) {
    width: 30px;
    height: 30px;
  }
`;

export const LinkIcons = styled.div`
  display: flex;

  img {
    margin: 5px 7px;
  }
`;
