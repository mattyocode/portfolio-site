import React from 'react';
import { Title, Landing, BodyCopy } from './styles/heading';

type PageTitleProps = {
  raised?: boolean;
  children?: React.ReactNode;
};

export const PageTitle = ({
  raised = false,
  children,
  ...restProps
}: PageTitleProps): JSX.Element => {
  return (
    <Title raised={raised} {...restProps}>
      {children}
    </Title>
  );
};

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, delay: 0.5, duration: 0.5 },
  },
};

export const LandingCopy = ({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <Landing
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      {...restProps}
    >
      {children}
    </Landing>
  );
};

export const LongCopy = ({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <BodyCopy {...restProps}>{children}</BodyCopy>;
};
