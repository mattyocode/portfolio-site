import styled from 'styled-components';

export const Wrapper = styled.div``;

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
