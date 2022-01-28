import {
  SBlogHomeWrapper,
  SBlogLandingContent,
  CanvasWrapper,
} from './styles/layout';

export const PageWrapper = ({
  children,
  ...restProps
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  return <SBlogHomeWrapper {...restProps}>{children}</SBlogHomeWrapper>;
};

export const BlogCanvasWrapper = ({
  children,
  ...restProps
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  return <CanvasWrapper {...restProps}>{children}</CanvasWrapper>;
};

export const BlogLandingContent = ({
  children,
  ...restProps
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  return <SBlogLandingContent {...restProps}>{children}</SBlogLandingContent>;
};
