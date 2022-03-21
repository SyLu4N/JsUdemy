import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body{
  font-family: sans-serif;
  background: ${colors.primaryDarkColor};
  color: ${colors.primaryDarkColor};
}

html, body, #root{
  height: 102%;
}

button{
  cursor: pointer;
  background-color: ${colors.primaryColor};
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 2px;
  font-weight: 700;
  transition: all 300ms;

  &:hover{
    filter: contrast(150%);
  }
}

.error{
  color: ${colors.primaryColor};
  font-size: 12px;
  margin-left: 5px;
  font-style: italic;
}

a{
  text-decoration: none;
  color: ${colors.primaryDarkColor};
  transition-duration: 200ms;

  &:hover{
    filter: contrast(150%);
  }
}

ul{
  list-style: none;
}

label {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

input {
  height: 40px;
  font-size: 18px;
  border: 1px solid #ddd;
  padding-left: 10px;
  border-radius: 4px;

  &:focus {
    border: 1px solid #aaa;
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.click {
  cursor: pointer;
}

.none {
    display: none;
}

.flex {
  display: flex;
}

.block {
  display: block;
}
`;

export const Container = styled.section`
  max-width: 480px;
  background-color: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
