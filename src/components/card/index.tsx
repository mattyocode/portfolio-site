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

type IconObject = {
  filename: string;
  label: string;
};

type ProjectCardObject = {
  title: string;
  linkToSite: string;
  img: string;
  description: string;
  icons: Array<IconObject>;
  githubRepo: string;
};

type ProjectCardProps = {
  projectData: ProjectCardObject;
};

export default function ProjectCard({
  projectData,
}: ProjectCardProps): JSX.Element {
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
              return <Icon key={idx} src={`/icons/${icon.filename}.svg`} />;
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
                <Icon src={'/icons/web-link.svg'} />
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
                <Icon src={'/icons/github.svg'} />
              </a>
            </LinkIcon>
          )}
        </LinkIcons>
      </Footer>
    </Wrapper>
  );
}
