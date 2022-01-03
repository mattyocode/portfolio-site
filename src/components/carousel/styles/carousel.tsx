import styled, { css } from 'styled-components';
import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel';

export const StyledSlide = styled(Slide)`
  .centered {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const StyledSlider = styled(Slider)`
  width: 100vw; //75vw;
  max-width: 1200px;

  @media screen and (min-height: 560px) {
    height: 70vh;
    max-height: 560px;
    max-width: 1200px;
  }

  @media screen and (min-height: 660px) {
    height: 65vh;
  }

  @media screen and (min-height: 730px) {
    height: 70vh;
  }

  @media screen and (min-height: 800px) {
    height: 65vh;
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
  margin: 0.25rem 0;

  @media screen and (min-height: 660px) {
    margin: 1rem 0;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    filter: drop-shadow(2px 2px 0 #e79e3c);
    margin: 0 1rem;
    font-size: 1rem;
  }
  &:disabled {
    border: 2px #444 solid;
  }
`;

export const StyledDotGroup = styled(DotGroup)`
  display: flex;

  button {
    color: white;
    border: 2px white solid;
    border-radius: 50%;
    margin: auto 8px;
    filter: drop-shadow(2px 2px 0 #e79e3c);
  }
  .carousel__dot--selected {
    border: 2px lightgray solid;
    filter: drop-shadow(2px 2px 0 purple);
  }
`;
