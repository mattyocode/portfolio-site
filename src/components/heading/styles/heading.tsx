import styled from 'styled-components';

type TitleProps = {
  relative?: boolean;
};

export const Title = styled.h1<TitleProps>`
  z-index: 80;
  position: ${(props) => (props.relative ? 'relative' : 'absolute')};
  height: 2rem;
  left: 2rem;
  top: 3rem;
  text-align: left;

  @media screen and (min-width: 1024px) {
    top: 4rem;
    left: 5rem;
  }
`;

export const Landing = styled.div`
  /* position: absolute;
  bottom: 15%; */
  /* position: relative; */
  padding: 2rem;

  @media screen and (min-width: 768px) {
    bottom: 0;
    /* position: relative; */
    display: flex;
    flex-direction: column;
    justify-content: center;
  } ;
`;

export const BodyCopy = styled.div`
  z-index: 80;
  padding: 2rem 0.75rem;
  max-width: 30rem;
`;
