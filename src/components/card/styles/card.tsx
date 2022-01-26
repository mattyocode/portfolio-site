import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px #ff8a65 solid;
  border-radius: 5px;
  margin: auto;
  padding: 0.25rem;
  height: 100%;
  max-width: 90vw;
  background: #373f51;
  filter: drop-shadow(15px 15px 4px #333);

  @media screen and (min-width: 410px) {
    width: 22rem;
  }

  @media screen and (min-width: 850px) {
    width: 26rem;
  }

  @media screen and (min-width: 1000px) {
    width: 28rem;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  margin: 0.5rem;
  height: 12rem;
  width: 15rem;

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
    width: 20rem;
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

  @media screen and (min-height: 668px) {
    font-size: 0.9rem;
    margin: 0.5rem;
  }

  /* @media screen and (min-width: 450px) and (min-height: 668px) { */
  @media screen and (min-width: 450px) and (min-height: 730px) {
    font-size: 1rem;
    margin: 0.7rem;
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
