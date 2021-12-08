import React from 'react';
import {
  SectionContainer,
  SectionBackground,
  ImageWrapper,
} from './styles/background';
import Image, { ImageProps } from 'next/image';

// interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
//   children?: React.ReactNode;
// }

// interface SectionBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
//   color: string;
//   children?: React.ReactNode;
// }

type WrapperProps = {
  children?: React.ReactNode;
};

export const PageWrapper: React.FC<WrapperProps> = ({
  children,
  ...restProps
}) => {
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

type SectionImageProps = {
  src: string;
  alt: string;
  objectFit?: ImageProps['objectFit'];
  children?: React.ReactNode;
};

export const SectionImage: React.FC<SectionImageProps> = ({
  src,
  alt,
  objectFit,
  children,
}) => {
  return (
    <ImageWrapper>
      <Image src={src} alt={alt} objectFit={objectFit} layout='fill' />
      {children}
    </ImageWrapper>
  );
};
