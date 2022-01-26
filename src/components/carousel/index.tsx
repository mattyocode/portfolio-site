import React, { useEffect, useRef, MutableRefObject } from 'react';
import Image from 'next/image';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  StyledDotGroup,
  StyledSlide,
  StyledSlider,
  StyledProvider,
  ButtonWrapper,
  Wrapper,
} from './styles/carousel';
import Card from '../card';
import useWindowDimensions from '../../helpers/useWindowDimensions';
import { ProjectDataObject } from '../../types';

export default function ProjectCarousel({
  projectData,
}: {
  projectData: ProjectDataObject[];
}): JSX.Element {
  const { width } = useWindowDimensions();
  const numSlidesRef: MutableRefObject<number | undefined> = useRef();

  useEffect(() => {
    if (width && width >= 768) {
      numSlidesRef.current = 2;
    } else {
      numSlidesRef.current = 1;
    }
  }, [width]);

  return (
    <StyledProvider
      naturalSlideWidth={3}
      naturalSlideHeight={4}
      totalSlides={projectData.length}
      className='centered'
      visibleSlides={numSlidesRef.current}
    >
      <Wrapper>
        <StyledSlider>
          {projectData &&
            projectData.length > 0 &&
            projectData.map((project, idx) => (
              <StyledSlide key={idx} index={idx} innerClassName='centered'>
                <Card projectData={project} />
              </StyledSlide>
            ))}
        </StyledSlider>
        <ButtonWrapper>
          <ButtonBack>
            <Image
              src='/icons/chevron-left.svg'
              alt='previous'
              height={20}
              width={20}
            />
          </ButtonBack>
          <StyledDotGroup className='styled' />
          <ButtonNext>
            <Image
              src='/icons/chevron-right.svg'
              alt='next'
              height={20}
              width={20}
            />
          </ButtonNext>
        </ButtonWrapper>
      </Wrapper>
    </StyledProvider>
  );
}
