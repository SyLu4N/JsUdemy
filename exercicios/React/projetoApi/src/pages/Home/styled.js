import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Style = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${primaryColor};
  margin-top: 30px;

  a {
    color: ${primaryColor};
  }
`;
