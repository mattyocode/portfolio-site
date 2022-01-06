import React from 'react';
import {
  AboutContent,
  ProfilePic,
  SectionContainer,
  SectionBackground,
  ImageWrapper,
  LandingContent,
  CenteredContent,
  RelativeWrapper,
} from './styles/layout';

type Props = {
  children?: React.ReactNode;
};

export const PageWrapper = ({
  id,
  children,
  ...restProps
}: {
  id: string;
  children?: React.ReactNode;
}): JSX.Element => {
  return (
    <SectionContainer id={id} {...restProps}>
      {children}
    </SectionContainer>
  );
};

interface SectionProps extends React.ComponentPropsWithoutRef<'div'> {
  id: string;
  color: string;
  backgroundImage?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ id, color, ...restProps }, ref) => {
    return (
      <SectionBackground ref={ref} id={id} color={color} {...restProps}>
        {restProps.children}
      </SectionBackground>
    );
  }
);

Section.displayName = 'Section';

export const FullBleedWrapper = ({
  centered = true,
  children,
  ...restProps
}: {
  centered?: boolean;
  children?: React.ReactNode;
}): JSX.Element => {
  return (
    <ImageWrapper centered={centered} {...restProps}>
      {children}
    </ImageWrapper>
  );
};

interface AboutCenteredProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode;
  rowReverse?: boolean;
}

export const AboutCentered = React.forwardRef<
  HTMLDivElement,
  AboutCenteredProps
>(({ rowReverse = true, children, ...restProps }, ref) => {
  return (
    <AboutContent ref={ref} rowReverse={rowReverse} {...restProps}>
      {children}
    </AboutContent>
  );
});

AboutCentered.displayName = 'AboutCentered';

export const LandingCentered = ({
  children,
  ...restProps
}: Props): JSX.Element => {
  return <LandingContent {...restProps}>{children}</LandingContent>;
};

export const ProfilePicWrapper = ({
  children,
  ...restProps
}: Props): JSX.Element => {
  return <ProfilePic {...restProps}>{children}</ProfilePic>;
};

export const Centered = ({
  column = false,
  children,
  ...restProps
}: {
  column?: boolean;
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <CenteredContent column={column} {...restProps}>
      {children}
    </CenteredContent>
  );
};

export const Relative = ({ children, ...restProps }: Props): JSX.Element => {
  return <RelativeWrapper {...restProps}>{children}</RelativeWrapper>;
};
