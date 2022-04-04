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
    justify-content: flex-end;
    width: 100%;
  }

  .salvar {
    width: 100px;
  }
`;
