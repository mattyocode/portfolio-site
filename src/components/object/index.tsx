import { Wrapper, Container } from './styles/object';

type Props = {
  children: React.ReactNode;
};

export const ObjectWrapper = ({
  children,
  ...restProps
}: Props): JSX.Element => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

export const ObjectContainer = ({
  children,
  ...restProps
}: Props): JSX.Element => {
  return <Container {...restProps}>{children}</Container>;
};
