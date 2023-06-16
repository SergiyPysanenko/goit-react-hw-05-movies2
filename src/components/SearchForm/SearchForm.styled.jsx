import styled from 'styled-components';

export const Form = styled.form`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  display: flex;
  align-items: center;
  width: 800px;
  border-radius: 5%;
  margin-left: 20px;
`;

export const Input = styled.input`
  border: 2px solid #ccc;
  padding: 10px;
  font-size: 16px;
  flex: 1;
`;

export const Button = styled.button`
  background-color: #818080;
  border: none;
  border-radius: 10%;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f39c1c;
  }
`;