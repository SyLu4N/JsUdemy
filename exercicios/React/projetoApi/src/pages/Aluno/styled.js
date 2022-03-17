import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Form = styled.form`
  margin-top: 15px;

  button {
    width: 100%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 15px;
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    color: #fff;
    background-color: ${primaryColor};
    padding: 6px;
    border-radius: 50%;
  }
`;
