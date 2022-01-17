import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  Wrapper,
  ImageWrapper,
  Video,
  TextWrapper,
  Title,
  BodyCopy,
  Footer,
  Icon,
  Icons,
  LinkIcons,
} from './styles/card';
import { LinkIcon } from '../icon-links/styles/icon-links';
import { ProjectDataObject } from '../../types';

export default function ProjectCard({
  projectData,
}: {
  projectData: ProjectDataObject;
}): JSX.Element {
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const Ref = useRef<HTMLVideoElement | null>(null);
  const sourceRef = useRef<HTMLSourceElement | null>(null);
  const { ref: cardRef, inView: cardInView } = useInView();

  useEffect(() => {
    if (cardInView && Ref.current) {
      setVideoSrc(projectData.video);
      Ref.current.load();
      Ref.current.play();
    }
  }, [cardInView, Ref, projectData]);

  return (
    <Wrapper ref={cardRef}>
      <ImageWrapper>
        {projectData.video && cardInView ? (
          <Video
            ref={Ref}
            autoPlay
            loop
            muted
            playsInline
            poster={`${projectData.img}`}
          >
            <source ref={sourceRef} src={videoSrc} />
          </Video>
        ) : (
          <Image
            src={`${projectData.img}`}
            alt={`${projectData.title} image`}
            layout='fill'
            objectFit='cover'
            priority
          />
        )}
      </ImageWrapper>
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
