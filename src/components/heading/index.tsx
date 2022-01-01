import React from 'react';
import { Title, Landing, BodyCopy } from './styles/heading';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

type PageTitleProps = {
  raised?: boolean;
  children?: React.ReactNode;
};

export const PageTitle: React.FC<PageTitleProps> = ({
  raised = false,
  children,
  ...restProps
}) => {
  return (
    <Title raised={raised} {...restProps}>
      {children}
    </Title>
  );
};

export const LandingCopy: React.FC<Props> = ({ children, ...restProps }) => {
  return <Landing {...restProps}>{children}</Landing>;
};

export const LongCopy: React.FC<Props> = ({ children, ...restProps }) => {
  return <BodyCopy {...restProps}>{children}</BodyCopy>;
};
