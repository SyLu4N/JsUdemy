import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Form = styled.form`
  margin-top: 15px;
  .aluno {
    border: none;
    border-bottom: 1px solid #ccc;
    width: 100%;
    border-radius: 0px;
    margin-bottom: 10px;
  }

  .alunoBtn {
    width: auto;
    margin-left: 81%;
  }

  button {
    width: 100%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 15px;
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;

  img {
    width: 180px;
    height: 180px;
    border-radius: 4px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    color: #fff;
    background-color: ${primaryColor};
    padding: 6px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  background: url('/img/teste2.png');
  background-size: contain;
  padding: 5px 0;
  margin: 20px auto 0 auto;
  max-width: 480px;
  z-index: 2;
  border-radius: 4px 4px 0px 0px;
  box-shadow: inset 0px -1px 10px 20px white;
`;

export const Container = styled.div`
  max-width: 480px;
  background-color: #fff;
  margin: 0px auto 30px auto;
  padding: 5px 30px 30px 30px;
  border-radius: 0 0 4px 4px;
`;
