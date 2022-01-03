import styled from 'styled-components';

type TitleProps = {
  raised?: boolean;
};

export const Title = styled.h1<TitleProps>`
  z-index: 80;
  position: absolute;
  left: 1.5rem;
  top: ${(props) => (props.raised ? '0rem' : '2.5rem')};
  text-align: left;

  @media screen and (max-height: 567px) {
    display: none;
  }

  @media screen and (min-height: 660px) {
    height: 2rem;
    left: 2rem;
    top: ${(props) => (props.raised ? '1rem' : '3rem')};
  }

  @media screen and (min-width: 1024px) {
    top: ${(props) => (props.raised ? '1rem' : '4rem')};
    left: 5rem;
  }
`;

export const Landing = styled.div`
  padding: 2rem;

  @media screen and (min-width: 768px) {
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } ;
`;

export const BodyCopy = styled.div`
  z-index: 80;
  padding: 0rem 0.75rem;
  max-width: 30rem;

  @media screen and (min-width: 768px) and (min-height: 660px) {
    padding: 2rem 0.75rem;
  }
`;
