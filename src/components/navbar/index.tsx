import React, { useCallback } from 'react';
import Link, { LinkProps } from 'next/link';
import { LinksWrapper, Nav, NavLink } from './styles/navbar';

type Props = {
  children: React.ReactNode;
};

export const Navbar = ({ children, ...restProps }: Props): JSX.Element => {
  return <Nav {...restProps}>{children}</Nav>;
};

export const Links = ({ children, ...restProps }: Props): JSX.Element => {
  return <LinksWrapper {...restProps}>{children}</LinksWrapper>;
};

export const PageTopLink = ({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const topHandler = (e: React.MouseEvent<HTMLElement>) => {
    window.scrollTo(0, 0);
  };
  return (
    <NavLink onClick={topHandler} {...restProps}>
      <Link href={'/'}>{children}</Link>
    </NavLink>
  );
};

export const NavbarLink = ({
  href,
  children,
  scroll,
  className,
  ...anchorProps
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  scroll?: boolean;
}): JSX.Element => {
  return (
    <NavLink>
      <Link href={href} scroll={scroll}>
        <a {...anchorProps} className={className}>
          {children}
        </a>
      </Link>
    </NavLink>
  );
};

interface ScrollLinkProps
  extends Omit<React.HTMLProps<HTMLAnchorElement>, 'href' | 'as'>,
    LinkProps {}

export const ScrollLink: React.FC<ScrollLinkProps> = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  target,
  ...anchorProps
}: ScrollLinkProps): JSX.Element => {
  const handleClick = useCallback(
    (e) => {
      if ((href as string).startsWith('#')) {
        e.preventDefault();
        const destination = document.querySelector(href as string);
        if (destination) {
          destination.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          });
        }
      }
    },
    [href]
  );

  return (
    <NavLink>
      <Link
        href={href}
        as={as}
        replace={replace}
        scroll={false}
        shallow={shallow}
        passHref={passHref}
        prefetch={prefetch}
        locale={locale}
      >
        <a
          role='link'
          onClick={handleClick}
          onKeyDown={handleClick}
          {...anchorProps}
        >
          {children}
        </a>
      </Link>
    </NavLink>
  );
};
