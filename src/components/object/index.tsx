import { Wrapper, Container } from './styles/object';

export function ObjectWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

export function ObjectContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
