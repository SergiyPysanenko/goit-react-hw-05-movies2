import styled from 'styled-components';
import {  
  NavLink,  
  Link,  
} from 'react-router-dom';

export const Block = styled.div`
display: flex;
gap: 20px;
margin: 20px;
`;

export const Image = styled.img`
height: 400px;

`;

export const InfoBlock = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
width: 500px;
`;

export const Title = styled.h3`
margin-left: 50px;
`;
export const LinkStyled = styled(Link)`
margin-left: 50px;
display: inline-block;
  background-color: #f39c1c;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #818080;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
`;
export const NavLinkStyled = styled(NavLink)`
margin-left: 50px;
`;