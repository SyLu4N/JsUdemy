import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Form = styled.form`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  }

  .flex {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    font-size: 14px;
    color: ${primaryColor};
  }
`;
