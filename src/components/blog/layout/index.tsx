import {
  SBlogHomeWrapper,
  SBlogPostsWrapper,
  CanvasWrapper,
  SPostPageWrapper,
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

export const BlogPostsWrapper = ({
  children,
  ...restProps
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  return <SBlogPostsWrapper {...restProps}>{children}</SBlogPostsWrapper>;
};

export const PostPageWrapper = ({
  children,
  ...restProps
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  return <SPostPageWrapper {...restProps}>{children}</SPostPageWrapper>;
};
