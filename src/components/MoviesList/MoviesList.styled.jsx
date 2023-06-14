import styled from 'styled-components';
import  {Link } from 'react-router-dom';


export const Container = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  max-width: 100%;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;

`


export const MovieItem = styled.li`
  margin-top: 0;
  margin-bottom: 0;
  padding: 10px;  
  margin-left: auto;
  margin-right: auto;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #333;
  position: relative;
  display: inline-block;
  overflow: hidden;
`;
export const Image = styled.img`
  background: #ffffff;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  margin: 0;
  border-radius: 10px;
  display: inline-block;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
  } 
`;

export const Title = styled.h3`
  width: 100%;
  text-wrap: wrap;
  text-align: center;
  margin: 10px 0;
  overflow-wrap: break-word | normal;
  max-width: 300px;
  color: white; 

  
`;
