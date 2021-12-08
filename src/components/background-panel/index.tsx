import React from 'react';
import { PanelContainer, PanelBackground } from './styles/background';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const PanelWrapper: React.FC<PanelProps> = ({
  children,
  ...restProps
}) => {
  return <PanelContainer {...restProps}>{children}</PanelContainer>;
};

export const PanelBg: React.FC<PanelProps> = ({ children, ...restProps }) => {
  return <PanelBackground {...restProps}>{children}</PanelBackground>;
};
