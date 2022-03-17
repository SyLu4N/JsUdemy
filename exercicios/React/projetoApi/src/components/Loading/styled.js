import styled from 'styled-components';

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

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .loading {
    display: flex;
    align-items: center;
    animation: 7000s girar infinite;
  }

  .text {
    animation: 3s carregar alternate-reverse infinite;
    padding-left: 14px;
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
      transform: rotate(1000000deg);
    }
  }
`;
