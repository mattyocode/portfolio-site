import React from 'react';
import {
  AboutContent,
  ProfilePic,
  SectionContainer,
  SectionBackground,
  ImageWrapper,
  LandingContent,
  CenteredContent,
  VerticalWrapper,
} from './styles/layout';

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

type PageWrapperProps = {
  id: string;
  children?: React.ReactNode;
};

export const PageWrapper: React.FC<PageWrapperProps> = ({
  id,
  children,
  ...restProps
}) => {
  return (
    <SectionContainer id={id} {...restProps}>
      {children}
    </SectionContainer>
  );
};

type SectionProps = {
  id: string;
  color: string;
  backgroundImage?: string;
  style?: React.CSSProperties;
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

type FullBleedProps = {
  centered?: boolean;
  children?: React.ReactNode;
};

export const FullBleedWrapper: React.FC<FullBleedProps> = ({
  centered = true,
  children,
  ...restProps
}) => {
  return (
    <ImageWrapper centered={centered} {...restProps}>
      {children}
    </ImageWrapper>
  );
};

type AboutCenteredProps = {
  children?: React.ReactNode;
  rowReverse?: boolean;
};

export const AboutCentered: React.FC<AboutCenteredProps> = ({
  rowReverse = true,
  children,
  ...restProps
}) => {
  return (
    <AboutContent rowReverse={rowReverse} {...restProps}>
      {children}
    </AboutContent>
  );
};

export const LandingCentered: React.FC<Props> = ({
  children,
  ...restProps
}) => {
  return <LandingContent {...restProps}>{children}</LandingContent>;
};

export const ProfilePicWrapper: React.FC<Props> = ({
  children,
  ...restProps
}) => {
  return <ProfilePic {...restProps}>{children}</ProfilePic>;
};

type CenteredProps = {
  column?: boolean;
  children: React.ReactNode;
};

export const Centered: React.FC<CenteredProps> = ({
  column = false,
  children,
  ...restProps
}) => {
  return (
    <CenteredContent column={column} {...restProps}>
      {children}
    </CenteredContent>
  );
};

export const VerticalWrap: React.FC<Props> = ({ children, ...restProps }) => {
  return <VerticalWrapper {...restProps}>{children}</VerticalWrapper>;
};
