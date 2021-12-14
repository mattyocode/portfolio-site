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

type centeredProps = {
  children?: React.ReactNode;
  rowReverse?: boolean;
};

export const Centered: React.FC<centeredProps> = ({
  rowReverse = true,
  children,
  ...restProps
}) => {
  return (
    <CenteredElements rowReverse={rowReverse} {...restProps}>
      {children}
    </CenteredElements>
  );
};

export const ProfilePicWrapper: React.FC<Props> = ({
  children,
  ...restProps
}) => {
  return <ProfilePic {...restProps}>{children}</ProfilePic>;
};
