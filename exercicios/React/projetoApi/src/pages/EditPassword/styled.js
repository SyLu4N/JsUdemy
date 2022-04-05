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

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }

  .salvar {
    border: 1px solid ${primaryColor};
    width: 100px;
  }

  .cancelar {
    border: 1px solid ${primaryColor};
    background: #fff;
    color: ${primaryColor};
    margin-right: 20px;
  }
`;
