import React from 'react';
import Image from 'next/image';
import {
  Wrapper,
  ImageWrapper,
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
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={projectData.img}
          alt='moviechooser website image'
          layout='fill'
          objectFit='cover'
          priority
        />
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
