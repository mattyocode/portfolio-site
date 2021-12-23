import React from 'react';
import Image from 'next/image';
import {
  CarouselProvider,
  Dot,
  DotGroup,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { StyledSlide, StyledSlider, ButtonWrapper } from './styles/carousel';
import Card from '../card';
// import ChevronRight from '../../../public/icons/chevron-right.svg';
// import ChevronLeft from '../../../public/icons/chevron-left.svg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { projectData } from '../../data/project-data';

export default function ProjectCarousel(): JSX.Element {
  return (
    <CarouselProvider
      naturalSlideWidth={3}
      naturalSlideHeight={4}
      totalSlides={2}
    >
      <StyledSlider>
        {projectData &&
          projectData.length > 0 &&
          projectData.map((project, idx) => (
            <StyledSlide key={idx} index={idx} innerClassName='centered'>
              <Card projectData={project} />
              {/* {project.title} */}
            </StyledSlide>
          ))}
      </StyledSlider>
      <ButtonWrapper>
        <ButtonBack>
          <FaChevronLeft />
        </ButtonBack>
        <DotGroup />
        <ButtonNext>
          <FaChevronRight />
        </ButtonNext>
      </ButtonWrapper>
    </CarouselProvider>
  );
}
