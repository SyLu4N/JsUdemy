import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  height: 60px;

  a {
    font-weight: bold;

    &:hover {
      filter: none;
    }
  }

  .nav {
    color: white;
  }

  .logado {
    padding-top: 2px;
  }

  .noLoggindIn {
    margin: 0 10px;
  }

  .logo {
    font-weight: normal;
    font-family: 'Hurricane', cursive;
    font-size: 2em;
    color: white;
    text-shadow: 0px 0px 6px black;
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
    right: 19%;
    color: ${primaryColor};
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    min-width: 150px;
  }

  .none {
    display: none;
  }

  .hr {
    border-bottom: 1px solid ${primaryColor};
    width: 100%;
    display: flex;
    justify-content: left;
    margin-bottom: 8px;
  }
`;
