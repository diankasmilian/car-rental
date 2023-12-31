import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h1`
  margin: 20px 0;
  text-align: center;
  font-size: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 50px;
`;

export const NavList = styled(NavLink)`
  text-decoration: none;
  color: #222;
  font-weight: 600;
  transition: transform 500ms ease;

  &:hover {
    color: #3470ff;
    transform: scale(1.05);
  }

  &.active {
    color: #3470ff;
  }
`;

export const Footer = styled.footer`
  margin-top: 100px;
  text-align: center;
`;

export const LoaderBox = styled.div`
  text-align: center;
  margin-top: 100px;
`;
