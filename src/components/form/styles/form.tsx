import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 440px;
  margin: 1rem;
  background-color: #eee;
  filter: drop-shadow(5px 5px 0 #ff8a66);

  @media screen and (min-height: 660px) {
    max-height: 480px;
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
  font-size: 16px;
  height: 2rem;
  line-height: 50px;
  margin: 2px 8px 5px 8px;

  @media screen and (min-height: 660px) {
    font-size: 1rem;
    height: 2.5rem;
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
  font-size: 0.9rem;
  resize: none;
  font-family: 'Open Sans', sans-serif;

  @media screen and (min-height: 660px) {
    font-size: 1rem;
  }
`;

export const FieldError = styled.p`
  display: inline;
  font-size: 0.6rem;
  font-weight: bold;
  color: gray;
  padding: auto 2px;

  @media screen and (min-height: 660px) {
    font-size: 0.7rem;
  }
`;

export const CenterButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type SubmitProps = {
  disabled?: any;
};

export const SubmitButton = styled.button<SubmitProps>`
  background-color: #59a7bb;
  border: none;
  color: white;
  padding: 1rem 2rem;
  margin: 1rem;
  max-width: 10rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  filter: drop-shadow(3px 3px 0 #ccc);
  cursor: pointer;

  &:disabled {
    background: #444;
    color: #aaa;
    filter: drop-shadow(0px 0px 0 #ccc);
    cursor: not-allowed;
  }
`;
