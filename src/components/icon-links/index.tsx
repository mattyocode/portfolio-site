import React from 'react';
import { LinkIcon, LargeIcon, Wrapper } from './styles/icon-links';

export const LargeIconButton = ({
  destination,
  iconName,
}: {
  destination: string;
  iconName: string;
}): JSX.Element => {
  return (
    <LinkIcon>
      <a href={destination} target={'_blank'} rel='noreferrer'>
        <LargeIcon src={`/icons/${iconName}.svg`} />
      </a>
    </LinkIcon>
  );
};

export type ContactLinkObj = {
  name: string;
  destination: string;
};

export const ContactIcons = ({
  links,
  centered = false,
  margin = null,
  ...restProps
}: {
  links: ContactLinkObj[];
  centered?: boolean;
  margin?: number;
}): JSX.Element => {
  return (
    <Wrapper centered={centered} {...restProps}>
      {links.map((link: ContactLinkObj, idx: number) => {
        return (
          <LargeIconButton
            key={idx}
            destination={link.destination}
            iconName={link.name}
          />
        );
      })}
    </Wrapper>
  );
};
