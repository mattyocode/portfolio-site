import styled from 'styled-components';

type WrapperProps = {
  centered?: boolean;
  margin?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: ${(props) => (props.centered ? 'relative' : 'absolute')};
  bottom: ${(props) => (props.centered ? '' : '5rem')};
  display: flex;
  width: 90vw;
  margin: ${(props) => (props.margin ? '1.5rem 0' : '0')};
  align-items: center;
  justify-content: ${(props) => (props.centered ? 'center' : 'flex-end')};
  padding: 0 1rem;

  @media screen and (min-height: 660px) {
    margin: ${(props) => (props.margin ? '3rem 0' : '0')};
  }

  @media screen and (min-width: 768px) {
    padding: 0 3rem;
    bottom: ${(props) => (props.centered ? '' : '2rem')};
  }
`;

export const LinkIcon = styled.div`
  display: inline-block;
  border: none;
  text-decoration: none;
  background: transparent;
  cursor: pointer;

  &:hover {
    filter: sepia(79%) saturate(2500%) hue-rotate(290deg) brightness(118%)
      contrast(119%);
  }
`;

export const LargeIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 5px;
  object-fit: contain;

  @media screen and (min-width: 768px) {
    width: 3rem;
    height: 3rem;
    margin: 10px;
  }
`;
