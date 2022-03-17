import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    display: flex;
    background-color: #eee;
    border: 5px dashed ${primaryColor};
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    cursor: pointer;
    border-radius: 25px;
    overflow: hidden;
    position: relative;
  }

  img {
    width: 180px;
    height: 180px;
  }

  p {
    padding: 5px;
    position: absolute;
    color: white;
    display: none;
    top: 0%;
  }

  .esconde:hover p {
    display: block;
    filter: brightness(80%);
    background-color: rgba(0, 0, 0, 0.4);
    padding: 45% 32%;
  }

  input {
    display: none;
  }
`;
