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

export const NavbarLink = ({
  href,
  children,
  ...restProps
}: {
  href: string;
  children: React.ReactNode;
}): JSX.Element => {
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
}: ScrollLinkProps): JSX.Element => {
  const handleClick = useCallback(
    (e) => {
      if ((href as string).startsWith('#')) {
        e.preventDefault();
        const destination = document.querySelector(href as string);
        if (destination) {
          document.body.style.scrollSnapType = 'none';
          document.getElementById('pagewrapper')!.style.scrollSnapType = 'none';
          destination.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          });
          setTimeout(() => {
            document.body.style.scrollSnapType = 'y mandatory';
            document.getElementById('pagewrapper')!.style.scrollSnapType =
              'y mandatory';
            destination.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'center',
            });
          }, 500);
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
        scroll={scroll}
        shallow={shallow}
        passHref={passHref}
        prefetch={prefetch}
        locale={locale}
      >
        <a
          // tabIndex={0}
          // target={target}
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
