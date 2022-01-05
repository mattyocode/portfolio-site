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

interface SectionProps extends React.ComponentPropsWithoutRef<'div'> {
  id: string;
  color: string;
  backgroundImage?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export type SectionRefProps = {
  navRef: React.RefObject<any> | ((node?: Element | null) => void);
};

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

// type AboutCenteredProps = {
//   children?: React.ReactNode;
//   rowReverse?: boolean;
// };

// export const AboutCentered: React.FC<AboutCenteredProps> = ({
//   rowReverse = true,
//   children,
//   ...restProps
// }) => {
//   return (
//     <AboutContent rowReverse={rowReverse} {...restProps}>
//       {children}
//     </AboutContent>
//   );
// };

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

export const Relative: React.FC<Props> = ({ children, ...restProps }) => {
  return <RelativeWrapper {...restProps}>{children}</RelativeWrapper>;
};
