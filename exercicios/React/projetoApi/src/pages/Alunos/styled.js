import styled from 'styled-components';

import { primaryColor } from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 20px;
  .alunos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    transition-duration: 300ms;
    cursor: pointer;
  }

  a {
    color: rgb(1, 1, 1, 0.9);

    &:hover {
      color: black;
    }
  }

  div + div {
    border-top: 1px solid #eee;
  }

  span {
    width: 100px;
  }

  .nome {
    text-align: center;
  }

  .email {
    width: 230px;
  }

  .delete {
    color: ${primaryColor};
  }

  .exclamation {
    cursor: pointer;
    background-color: ${primaryColor};
    height: 14px;
    width: 16px;
    margin-bottom: 5px;
    color: white;
    padding: 2px 0px;
    border-radius: 2px;
  }

  .none {
    display: none;
    width: 0;
    height: 0;
  }

  .block {
    display: block;
  }

  .em {
    font-weight: bold;
    font-style: italic;
  }

  .alunos:hover {
    margin: 0 -5px;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const NovoAluno = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: right;
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;

  .search {
    width: 200px;
    margin-left: 10px;
    height: 30px;
  }

  div {
    display: flex;
    align-items: center;
  }

  .click {
    margin-left: 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;

  a {
    transition: 300ms;
    color: ${primaryColor};
    font-size: 2em;

    &:hover {
      filter: none;
      text-decoration: underline;
    }
  }
`;

export const Opacity = styled.div`
  background-color: rgb(255, 255, 255, 0.5);
  width: 100%;
  padding: 20px 0;
  margin: 0;
`;

export const Limpo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 2.5em;
  }

  img {
    margin: 30px auto;
    width: 500px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1em;
    width: 500px;
  }
`;
