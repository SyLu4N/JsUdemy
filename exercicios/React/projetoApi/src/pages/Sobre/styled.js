import styled from 'styled-components';

export const Main = styled.div`
  .red {
    background-color: rgb(195, 7, 63, 0.4);
  }

  .go {
    display: flex;
    text-align: center;
    justify-content: center;
  }

  a {
    color: rgb(195, 7, 63);
    margin-top: -60px;
    margin-bottom: 30px;
    font-size: 26px;
    background-color: rgb(255, 255, 255, 0.8);
    transition-duration: 300ms;
    padding: 10px;

    &:hover {
      font-size: 30px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 50px;
  height: 110vh;
`;

export const ContentL = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: start;
  margin-left: 100px;
  align-items: center;
  width: 100%;
  padding: 20px;

  img {
    width: 400px;
  }

  p {
    font-size: 30px;
    max-width: 470px;
    margin-left: 70px;
    margin-bottom: 30px;
    background-color: rgb(255, 255, 255, 0.8);
    padding: 20px;
  }
`;

export const ContentR = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  margin-right: 100px;
  padding: 20px;

  img {
    width: 460px;
  }

  p {
    font-size: 30px;
    max-width: 470px;
    padding: 20px;
    color: white;
  }
`;
