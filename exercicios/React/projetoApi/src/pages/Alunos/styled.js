import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { primaryColor } from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
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
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const NovoAluno = styled(Link)`
  display: block;
  padding: 20px 0 0px 0;
  color: ${primaryColor};
`;
