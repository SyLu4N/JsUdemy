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

  a {
    color: ${primaryColor};
  }
`;
