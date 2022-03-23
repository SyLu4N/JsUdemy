import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 20px 30px;
  position: relative;

  a {
    margin: 0 10px 0 0;
    font-weight: bold;

    &:hover {
      filter: none;
    }
  }

  .logado {
    padding-top: 2px;
  }

  .logo {
    font-size: 2em;
    color: white;
  }

  .pPerfil {
    margin-top: 2px;
    text-align: left;
    color: ${primaryColor};
  }

  div {
    justify-content: center;
    display: flex;
    align-items: center;
  }

  p {
    font-size: 18px;
    font-weight: bold;
    padding-left: 5px;
    display: inline-block;
    margin-left: 4px;
  }

  .perfil {
    border-radius: 4px;
    background-color: white;
    position: absolute;
    padding: 4px;
    top: 70%;
    right: 5px;
    color: ${primaryColor};
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    min-width: 150px;
  }

  .hr {
    border-bottom: 1px solid ${primaryColor};
    width: 100%;
    display: flex;
    justify-content: left;
    margin-bottom: 8px;
  }
`;
