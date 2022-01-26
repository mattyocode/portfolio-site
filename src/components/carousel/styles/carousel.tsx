import styled from 'styled-components';
import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel';

export const Wrapper = styled.div``;

export const StyledSlide = styled(Slide)`
  .centered {
    padding-top: 1rem;
    padding-bottom: 2rem;
    max-height: 28rem;
    @media screen and (min-height: 600px) {
      max-height: 28rem;
    }
    @media screen and (min-height: 700px) {
      max-height: 30rem;
    }
    @media screen and (min-height: 800px) {
      max-height: 31rem;
      padding-top: 0;
    }
    @media screen and (min-height: 900px) {
      max-height: 32rem;
    }
  }
`;

export const StyledSlider = styled(Slider)`
  width: 100vw;
  max-width: 1200px;
  max-height: 28rem;
  margin-top: 3rem;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  @media screen and (min-height: 600px) {
    margin-top: 4rem;
    max-height: 30rem;
  }
  @media screen and (min-height: 700px) {
    margin-top: 2rem;
    max-height: 34rem;
  }
  @media screen and (min-height: 900px) {\
    margin-top: 1rem;
    max-height: 36rem;
  }
`;

export const StyledProvider = styled(CarouselProvider)``;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

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

  button:disabled {
    filter: drop-shadow(2px 2px 0 gray);
  }
`;

export const StyledDotGroup = styled(DotGroup)`
  display: flex;

  button {
    color: white;
    border: 5px white solid;
    border-radius: 50%;
    margin: auto 10px;
    filter: drop-shadow(2px 2px 0 #e79e3c);
  }

  .carousel__dot--selected {
    border: 5px lightgray solid;
    filter: drop-shadow(2px 2px 0 purple);
  }
`;
