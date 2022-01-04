import React from 'react';
import {
  ActionBtn,
  // ActionBtns,
  LargeIcon,
  Wrapper,
} from './styles/icon-buttons';
import { ContactLinksArr, ContactLinkObj } from '../../data/contact-links';

type LargeIconProps = {
  destination: string;
  iconName: string;
};

export const LargeIconButton = ({
  destination,
  iconName,
}: LargeIconProps): JSX.Element => {
  return (
    <ActionBtn>
      <a href={destination} target={'_blank'} rel='noreferrer'>
        <LargeIcon src={`/icons/${iconName}.svg`} />
      </a>
    </ActionBtn>
  );
};

// export const IconFooter = ({ children, ...restProps }) => {
//   return <Wrapper {...restProps}>{children}</Wrapper>;
// };

type ContactIconProps = {
  links: ContactLinksArr;
  centered?: boolean;
};

export const ContactIcons = ({ links, centered = false, ...restProps }) => {
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
