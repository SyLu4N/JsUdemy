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
    justify-content: space-between;
    width: 100%;
  }

  div > p a {
    color: ${primaryColor};

    &:hover {
      color: red;
    }
  }

  .salvar {
    width: 100px;
  }
`;
