import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 20px 30px;

  a {
    color: #fff;
    margin: 0 10px 0 0;
    font-weight: bold;
  }

  .logado {
    padding-top: 2px;
  }

  .logo {
    font-size: 2em;
  }
`;
