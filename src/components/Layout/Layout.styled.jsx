import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';


export const Header = styled.header`
display: flex;
flex-direction: column;
align-items: center;
`

export const MainTitle = styled.h1`
margin: 20px 0;
text-align: center;
font-size: 40px;
`

export const Nav = styled.nav`
display: flex;
gap: 50px;
`

export const NavList = styled(NavLink)`
text-decoration: none;
color: #222;
font-weight: 600;
transition: transform 500ms ease;

&:hover {
   color: #3470FF;
  transform: scale(1.05);

.active {
  color: #3470FF;
}
}
`

export const Footer = styled.footer`
margin-top: 30px;
text-align: center;
`