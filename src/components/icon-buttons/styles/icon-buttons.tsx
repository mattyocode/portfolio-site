import styled from 'styled-components';

type WrapperProps = {
  centered?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: ${(props) => (props.centered ? 'relative' : 'absolute')};
  bottom: ${(props) => (props.centered ? '' : '0')};
  display: flex;
  width: 100%;
  margin: 1.5rem;
  align-items: center;
  justify-content: ${(props) => (props.centered ? 'center' : 'flex-end')};
  padding: 0 1rem;

  @media screen and (min-height: 660px) {
    margin: 3rem;
  }

  @media screen and (min-width: 768px) and (min-height: 660px) {
    margin: 3rem;
    padding: 0 3rem;
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

  @media screen and (min-width: 768px) and (min-height: 660px) {
    width: 3rem;
    height: 3rem;
    margin: 10px;
  }
`;
