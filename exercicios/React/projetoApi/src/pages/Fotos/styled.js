import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    width: 175px;
    height: 175px;
    display: flex;
    background-color: #eee;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    cursor: pointer;
    position: relative;
    border-radius: 10px;
    transition-duration: 300ms;

    &:hover {
      filter: brightness(90%);
    }
  }

  img {
    width: 180px;
    height: 180px;
    border-radius: 10px;
  }

  p {
    padding: 5px;
    position: absolute;
    color: white;
    display: none;
    top: -2.7%;
  }

  .esconde:hover p {
    display: block;
    filter: brightness(80%);
    background-color: rgba(0, 0, 0, 0.4);
    padding: 45.5% 29%;
    border-radius: 10px;
  }

  input {
    display: none;
  }
`;

export const ProfilePicture = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 150px));
  align-items: center;
  gap: 5px;
  max-width: 100%;

  img {
    cursor: pointer;
    height: 150px;
    width: 150px;
    border-radius: 2px;
    margin: auto;
    transition-duration: 300ms;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }

  div {
    position: relative;
    margin: 0px auto;
    height: 150px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  max-width: 470px;
`;
