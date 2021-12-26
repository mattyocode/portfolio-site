import styled from 'styled-components';
// import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 440px;
  /* max-height: 560px; */
  max-height: 75vh;
  margin: 1rem;
  background-color: #eee;
  filter: drop-shadow(5px 5px 0 #ff8a66);

  @media screen and (min-height: 660px) {
    max-height: 540px;
  }
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 1rem;
  color: #ff8a66;
  /* filter: drop-shadow(2px 2px 0 #111); */
`;

export const Fields = styled.div`
  margin: 0 0.5rem;
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  color: #ff8a66;
  padding: 2px 7px;

  @media screen and (min-height: 660px) {
    font-size: 1rem;
    padding: 5px 7px;
  }
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 2px solid #ff8a66;
  color: #111;
  font-size: 0.8rem;
  /* font-weight: bold; */
  height: 50px;
  line-height: 50px;
  padding: 5px;
  margin: 2px 8px 5px 8px;

  @media screen and (min-height: 660px) {
    font-size: 1rem;
  }
`;

export const Message = styled.textarea`
  border: 0;
  outline: 0;
  background: transparent;
  display: block;
  margin: 0 0.5rem;
  border-bottom: 2px solid #ff8a66;
  min-height: 5rem;
  color: #111;
  font-size: 0.8rem;

  @media screen and (min-height: 660px) {
    font-size: 1rem;
  }
`;

export const SubmitButton = styled.button``;
