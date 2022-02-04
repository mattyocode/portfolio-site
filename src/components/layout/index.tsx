import React from 'react';
import {
  SAboutContent,
  SProfilePicWrapper,
  SPageWrapper,
  SSection,
  SFullBleedWrapper,
  SLandingContent,
  CenteredContent,
  RelativeWrapper,
  SCenterIcon,
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
    <SPageWrapper id={id} {...restProps}>
      {children}
    </SPageWrapper>
  );
};

interface SectionProps extends React.ComponentPropsWithoutRef<'div'> {
  id: string;
  color?: string;
  backgroundImage?: string;
  cover?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ id, color, ...restProps }, ref) => {
    return (
      <SSection ref={ref} id={id} color={color} {...restProps}>
        {restProps.children}
      </SSection>
    );
  }
);

Section.displayName = 'Section';

export const FullBleedWrapper = ({
  centered = true,
  flexRow = true,
  children,
  ...restProps
}: {
  centered?: boolean;
  flexRow?: boolean;
  children?: React.ReactNode;
}): JSX.Element => {
  return (
    <SFullBleedWrapper centered={centered} flexRow={flexRow} {...restProps}>
      {children}
    </SFullBleedWrapper>
  );
};

type LandingContentProps = {
  children?: React.ReactNode;
  flexRow?: string;
};

export const LandingContent = ({
  children,
  ...restProps
}: LandingContentProps): JSX.Element => {
  return <SLandingContent {...restProps}>{children}</SLandingContent>;
};

interface AboutContentProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode;
  rowReverse?: boolean;
}

export const AboutContent = React.forwardRef<HTMLDivElement, AboutContentProps>(
  ({ rowReverse = true, children, ...restProps }, ref) => {
    return (
      <SAboutContent ref={ref} rowReverse={rowReverse} {...restProps}>
        {children}
      </SAboutContent>
    );
  }
);

AboutContent.displayName = 'AboutContent';

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    delay: 0.3,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, delay: 0.5, duration: 0.5 },
  },
};

export const ProfilePicWrapper = ({
  children,
  ...restProps
}: Props): JSX.Element => {
  return (
    <SProfilePicWrapper
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      {...restProps}
    >
      {children}
    </SProfilePicWrapper>
  );
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

export const CenterIcon = ({ children, ...restProps }: Props): JSX.Element => {
  return <SCenterIcon {...restProps}>{children}</SCenterIcon>;
};
