import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 40px;
  height: 30px;
  background-color: #353d46ba;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  color: black;

  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  &:hover,
  &:focus {
    color: orange;
  }

  &.active {
    color: orange;
    padding: 6px 12px;
    border-radius: 4px;
    pointer-events: none;
    text-decoration: underline;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
`;