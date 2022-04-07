import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
  flex-direction: column;
  z-index: 4;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
  }

  .loading {
    display: flex;
    align-items: center;
    animation: 7000s girar infinite;
    color: ${primaryColor};
    opacity: 0.9;
  }

  .text {
    animation: 3s carregar alternate-reverse infinite;
    padding-left: 14px;
    color: ${primaryColor};
  }

  @keyframes carregar {
    0% {
      opacity: 0.2;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes girar {
    100% {
      transform: rotate(2000000deg);
    }
  }
`;
