import styled, { css } from 'styled-components';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';

export const StyledSlide = styled(Slide)`
  .centered {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* margin-top: 3rem; */
    /* top: 10%; */
  }
`;

export const StyledSlider = styled(Slider)`
  width: 100vw; //75vw;

  @media screen and (min-height: 660px) {
    height: 70vh;
  }
`;

export const StyledProvider = styled(CarouselProvider)`
  .centered {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Wrapper = styled.div`
  margin: 1rem auto;

  @media screen and (min-height: 660px) {
    margin: 3rem auto;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-height: 660px) {
    /* margin-bottom: 5rem; */
  }

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
