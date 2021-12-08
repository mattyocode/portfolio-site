import React from 'react';
import { Title } from './styles/heading';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const PageTitle: React.FC<Props> = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
