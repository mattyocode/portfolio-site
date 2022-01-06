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

export const LandingCopy = ({ children, ...restProps }): JSX.Element => {
  return <Landing {...restProps}>{children}</Landing>;
};

export const LongCopy = ({ children, ...restProps }): JSX.Element => {
  return <BodyCopy {...restProps}>{children}</BodyCopy>;
};
