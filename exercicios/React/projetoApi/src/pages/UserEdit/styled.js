import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  .login {
    margin-top: 6px;
    font-size: 14px;
    text-align: center;
  }

  .login a {
    color: ${primaryColor};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }

  div > p a {
    color: ${primaryColor};

    &:hover {
      color: red;
    }
  }

  .salvar {
    border: 1px solid ${primaryColor};
    width: 100px;
  }

  .cancelar {
    border: 1px solid ${primaryColor};
    background-color: #fff;
    color: ${primaryColor};
    margin-right: 20px;
  }
`;
