import styled from 'styled-components';

type WrapperProps = {
  centered?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: ${(props) => (props.centered ? 'relative' : 'absolute')};
  bottom: ${(props) => (props.centered ? '' : '5rem')};
  display: flex;
  width: 90vw;
  margin: 1.5rem 0;
  align-items: center;
  justify-content: ${(props) => (props.centered ? 'center' : 'flex-end')};
  padding: 0 1rem;

  @media screen and (min-height: 660px) {
    margin: 3rem 0;
  }

  @media screen and (min-width: 768px) {
    margin: 3rem 0;
    padding: 0 3rem;
    bottom: ${(props) => (props.centered ? '' : '2rem')};
  }
`;

export const ActionBtns = styled.div`
  display: flex;
`;

export const ActionBtn = styled.button`
  display: inline-block;
  border: none;
  text-decoration: none;
  background: transparent;
  cursor: pointer;

  /* &:hover {
    background-color: #0f3030;
    box-shadow: 0 0 10px 5px #0f3030;
  } */
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
