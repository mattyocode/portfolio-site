import React from 'react';
import {
  CenteredElements,
  ProfilePic,
  SectionContainer,
  SectionBackground,
  ImageWrapper,
} from './styles/sections';

// interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
//   children?: React.ReactNode;
// }

// interface SectionBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
//   color: string;
//   children?: React.ReactNode;
// }

type Props = {
  children?: React.ReactNode;
};

export const PageWrapper: React.FC<Props> = ({ children, ...restProps }) => {
  return <SectionContainer {...restProps}>{children}</SectionContainer>;
};

type SectionProps = {
  id: string;
  color: string;
  children?: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  ...restProps
}) => {
  return (
    <SectionBackground id={id} {...restProps}>
      {children}
    </SectionBackground>
  );
};

export const FullBleedWrapper: React.FC<Props> = ({
  children,
  ...restProps
}) => {
  return <ImageWrapper {...restProps}>{children}</ImageWrapper>;
};

export const Centered: React.FC<Props> = ({ children, ...restProps }) => {
  return <CenteredElements {...restProps}>{children}</CenteredElements>;
};

export const ProfilePicWrapper: React.FC<Props> = ({
  children,
  ...restProps
}) => {
  return <ProfilePic {...restProps}>{children}</ProfilePic>;
};

// type FullBleedWrapperProps = {
//   src: string;
//   alt: string;
//   objectFit?: ImageProps['objectFit'];
//   children?: React.ReactNode;
// };

// export const FullBleedWrapper: React.FC<FullBleedWrapperProps> = ({
//   src,
//   alt,
//   objectFit,
//   children,
// }) => {
//   return (
//     <ImageWrapper>
//       <Image src={src} alt={alt} objectFit={objectFit} layout='fill' />
//       {children}
//     </ImageWrapper>
//   );
// };
