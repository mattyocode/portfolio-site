import React, { ComponentProps, useCallback } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { LinksWrapper, Nav, NavLink } from './styles/navbar';

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

interface LinksProps extends React.ComponentPropsWithoutRef<'ul'> {
  children?: React.ReactNode;
}

interface NavLinkProps extends React.ComponentPropsWithoutRef<'li'> {
  children?: React.ReactNode;
  href: string;
}

interface ScrollLinkProps
  extends Omit<React.HTMLProps<HTMLAnchorElement>, 'href' | 'as'>,
    LinkProps {}

export const Navbar: React.FC<NavProps> = ({ children, ...restProps }) => {
  return <Nav {...restProps}>{children}</Nav>;
};

export const Links: React.FC<LinksProps> = ({ children, ...restProps }) => {
  return <LinksWrapper {...restProps}>{children}</LinksWrapper>;
};

export const NavbarLink: React.FC<NavLinkProps> = ({
  href,
  children,
  ...restProps
}) => {
  return (
    <NavLink {...restProps}>
      <NextLink href={href}>{children}</NextLink>
    </NavLink>
  );
};

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
}) => {
  const handleClick = useCallback(
    (e) => {
      if ((href as string).startsWith('#')) {
        e.preventDefault();
        const destination = document.querySelector(href as string);
        if (destination) {
          destination.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    },
    [href]
  );
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
    >
      <NavLink>
        <a
          tabIndex={0}
          target={target}
          role='link'
          onClick={handleClick}
          onKeyDown={handleClick}
          {...anchorProps}
        >
          {children}
        </a>
      </NavLink>
    </NextLink>
  );
};
