import styled from 'styled-components';

import { primaryColor } from '../../config/colors';

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: -30px;
  overflow: hidden;
  background-color: rgb(255, 255, 255, 0.8);
  padding-bottom: 110px;

  a {
    transition: 300ms;
    color: ${primaryColor};
    font-size: 2em;

    &:hover {
      filter: none;
      text-decoration: none;
      font-size: 34px;
    }
  }

  h1 {
    margin-top: -80px;
    color: #3f3d56;
    margin-bottom: 60px;
  }

  img {
    height: 500px;
    width: 500px;
  }
`;
