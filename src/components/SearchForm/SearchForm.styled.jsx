import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100px;
  margin-left: 20px;
`;

export const Input = styled.input`
  border: 2px solid #ccc;
  padding: 10px;
  font-size: 16px;
  flex: 1;
`;

export const Button = styled.button`
  background-color: #f39c1c;
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: #818080;
  }
`;