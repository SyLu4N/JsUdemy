import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';
import background from '../images/fundoTeste.jpg';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-family: cursive;
}

.primaryColor {
  color: ${colors.primaryColor};
}

body{
  font-family: sans-serif;
  background-image: url(${background});
  background-color: #fff;
  background-size: cover;
  color: ${colors.primaryDarkColor};
}

html, body, #root{
  height: 100%;
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
  color: ${colors.primaryColor};
  transition-duration: 200ms;

  &:hover{
    color: red;
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
  background-color: rgb(255, 255, 255, 0.6);
  box-shadow: 0px 0px 20px white;
  margin: 40px auto;
  padding: 5px;
  border-radius: 20px;
  overflow-y: hidden;
`;
