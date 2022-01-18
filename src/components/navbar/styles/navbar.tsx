import styled from 'styled-components';
import { StyledComponent } from 'styled-components';

export const Nav = styled.nav`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  backdrop-filter: blur(10px);

  @media screen and (min-width: 550px) {
    justify-content: flex-end;
  }

  @media screen and (min-width: 2000px) {
    justify-content: center;
  }
`;

export const LinksWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0.75rem 1rem;
  width: 100vw;
  max-width: 550px;

  @media screen and (min-width: 550px) {
    align-self: flex-end;
  }

  @media screen and (min-width: 2000px) {
    max-width: 1000px;
    justify-content: space-around;
  }
`;

export const NavLink: StyledComponent<'li', any, {}, never> = styled.li`
  display: block;
  cursor: pointer;
  border-bottom: 2px transparent solid;

  @media screen and (min-width: 350px) {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    /* filter: drop-shadow(2px 2px 0 #444); */
  }

  .active {
    border-bottom: 2px #ff8a66 solid;
    transition: border-bottom 0.5s ease-in-out;
  }

  &:hover {
    border-bottom: 2px #aaa solid;
    transition: border-bottom 0.5s ease-in-out;
  }
`;
