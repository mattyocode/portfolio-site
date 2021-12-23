import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px #ff8a65 solid;
  border-radius: 5px;
  margin: 0 1rem;
  max-width: 30rem;
  height: 78vh;
  max-height: 30rem;
  background: #373f51;
  filter: drop-shadow(15px 15px 4px #333);

  @media screen and (min-height: 660px) {
    padding: 1rem;
    max-height: 34rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin: 0.5rem;
`;

export const TextWrapper = styled.div`
  /* position: relative; */
  /* height: 100px; */
`;

export const Title = styled.h3`
  text-align: center;
  @media screen and (min-height: 660px) {
    margin: 1rem;
  }
`;

export const BodyCopy = styled.p`
  font-size: 0.8rem;
  margin: 0.5rem 1rem;

  @media screen and (min-height: 660px) {
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
  /* font-size: 2rem; */
`;

export const Icon = styled.img`
  /* width: 25px;
  height: 25px;
  margin: 5px; */
  width: 20px;
  height: 20px;
  margin: 5px;
  object-fit: contain;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const Icons = styled.div`
  display: flex;
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
