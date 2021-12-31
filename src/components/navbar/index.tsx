import React, { ComponentProps, useEffect, useCallback } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
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
      <Link href={href}>{children}</Link>
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
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href').replace('/', '');
    console.log('TARGET >', target);
    const location = document.querySelector(target).offsetTop;
    console.log('LOCATION > ', location);

    document.body.style.scrollSnapType = 'none';
    document.getElementById('pagewrapper').style.scrollSnapType = 'none';

    document.getElementById('pagewrapper').scrollTo({
      left: 0,
      top: location,
      behavior: 'smooth',
    });

    setTimeout(() => {
      document.body.style.scrollSnapType = 'y mandatory';
      document.getElementById('pagewrapper').style.scrollSnapType =
        'y mandatory';
      document.getElementById('pagewrapper').scrollTo({
        left: 0,
        top: location,
        behavior: 'smooth',
      });
    }, 500);
  };

  return (
    <NavLink>
      <Link
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref={passHref}
        prefetch={prefetch}
        locale={locale}
      >
        <a
          // tabIndex={0}
          // target={target}
          // role='link'
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
