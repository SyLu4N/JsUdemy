import styled from 'styled-components';

import { primaryColor } from '../../config/colors';

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: -30px;
  overflow: hidden;

  a {
    transition: 300ms;
    color: ${primaryColor};
    font-size: 2em;

    &:hover {
      filter: none;
      text-decoration: underline;
    }
  }

  h1 {
    margin-top: -30px;
    color: white;
  }

  img {
    height: 500px;
    width: 500px;
  }
`;
