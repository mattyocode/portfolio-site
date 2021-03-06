import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  Wrapper,
  ContentWrapper,
  ImageOpacity,
  Video,
  TextWrapper,
  Title,
  BodyCopy,
  Footer,
  Icon,
  Icons,
  LinkIcons,
} from './styles/card';
import { LinkIcon } from '../contact-icons/styles/contact-icons';
import { ProjectDataObject } from '../../types';

export default function ProjectCard({
  projectData,
}: {
  projectData: ProjectDataObject;
}): JSX.Element {
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { ref: cardRef, inView: cardInView } = useInView();

  useEffect(() => {
    if (cardInView && projectData.video && videoRef.current) {
      setVideoSrc(projectData.video);
      videoRef.current.play();
    }
    if (!cardInView && videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [cardInView, videoRef, projectData]);

  return (
    <Wrapper ref={cardRef}>
      <ContentWrapper>
        {projectData.video && (
          <Video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster={`${projectData.img}`}
          >
            {videoSrc && <source src={videoSrc} />}
            <source src={videoSrc} />
          </Video>
        )}
        <ImageOpacity opacity={videoSrc ? '0' : '1'}>
          <Image
            src={`${projectData.img}`}
            alt={`${projectData.title} image`}
            layout='fill'
            objectFit='cover'
            priority
          />
        </ImageOpacity>
      </ContentWrapper>
      <TextWrapper>
        <Title>{projectData.title}</Title>
        <BodyCopy>{projectData.description}</BodyCopy>
      </TextWrapper>
      <Footer>
        <Icons>
          {projectData.icons.length > 0 &&
            projectData.icons.map((icon, idx) => {
              return (
                <Icon
                  key={idx}
                  src={`/icons/${icon.src}.svg`}
                  alt={`${icon.label}`}
                  title={`${icon.label}`}
                />
              );
            })}
        </Icons>
        <LinkIcons>
          {projectData.linkToSite && (
            <LinkIcon>
              <a
                href={projectData.linkToSite}
                target={'_blank'}
                rel='noreferrer'
              >
                <Icon
                  src={'/icons/web-link.svg'}
                  alt={`link to ${projectData.title} site`}
                />
              </a>
            </LinkIcon>
          )}
          {projectData.githubRepo && (
            <LinkIcon>
              <a
                href={projectData.githubRepo}
                target={'_blank'}
                rel='noreferrer'
              >
                <Icon
                  src={'/icons/github.svg'}
                  alt={`link to ${projectData.title} github repo`}
                />
              </a>
            </LinkIcon>
          )}
        </LinkIcons>
      </Footer>
    </Wrapper>
  );
}
