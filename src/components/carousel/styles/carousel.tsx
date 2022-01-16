import styled from 'styled-components';
import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel';

export const StyledSlide = styled(Slide)`
  /* .centered {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 27rem;

    @media screen and (min-width: 321px) {
      max-height: 30rem;
    }

    @media screen and (min-height: 668px) {
      max-height: 32rem;
    }

    @media screen and (min-height: 668px) and (min-width: 450px) {
      max-height: 34rem;
    }
  } */
`;

export const StyledSlider = styled(Slider)`
  width: 95vw;
  max-width: 1200px;
  /* max-height: 26rem; */

  -ms-touch-action: pan-y;
  touch-action: pan-y;

  /* @media screen and (min-height: 568px) {
    padding-top: 3rem;
    max-width: 1200px;
  }

  @media screen and (min-width: 375px) and (min-height: 667px) {
    padding-top: 4rem;
    /* max-height: 32rem; */
  /* } */

  @media screen and (min-height: 668px) and (min-width: 450px) {
    /* max-height: 32rem; */
  }

  @media screen and (min-height: 820px) and (min-width: 768px) {
    height: 40rem;
  }
`;

export const StyledProvider = styled(CarouselProvider)`
  .centered {
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) and (min-height: 1000px) {
      padding-top: 7rem;
    }
    @media screen and (min-width: 1000px) and (min-height: 1000px) {
      padding-top: 0rem;
    }
    /* padding-bottom: 18px; */
  }
`;

export const Wrapper = styled.div`
  margin: 1rem auto;

  @media screen and (min-height: 730px) {
    margin: 4rem 0 2rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;

  @media screen and (min-height: 660px) {
    margin: 2rem 0;
  }

  @media screen and (min-height: 900px) {
    margin: 3rem 0;
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

  button:disabled {
    /* border: 2px #444 solid; */
    filter: drop-shadow(2px 2px 0 gray);
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
