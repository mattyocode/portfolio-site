import { SBlogHomeWrapper } from './styles/layout';

export const PageWrapper = ({
  children,
  ...restProps
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  return <SBlogHomeWrapper {...restProps}>{children}</SBlogHomeWrapper>;
};
