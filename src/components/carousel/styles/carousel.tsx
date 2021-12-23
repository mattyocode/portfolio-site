import styled, { css } from 'styled-components';
import { Slide, Slider } from 'pure-react-carousel';

export const StyledSlide = styled(Slide)`
  .centered {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const StyledSlider = styled(Slider)`
  width: 100vw;
  height: 80vh;

  @media screen and (min-height: 660px) {
    height: 75vh;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    filter: drop-shadow(3px 3px 0 #e79e3c);
    margin: 0 1rem;
    font-size: 1rem;
  }
`;
