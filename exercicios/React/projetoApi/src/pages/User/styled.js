import styled from 'styled-components';

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  p {
    font-family: 'Hurricane', cursive;
    font-size: 3em;
  }

  div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .edit {
    margin-top: 20px;
    width: 100px;
  }
`;
