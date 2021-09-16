import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 400px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 5px;
  margin: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);

  h1 {
    align-self: center;
    margin: 15px 30px;
  }

  div {
    margin: 10px 30px;
  }
`;
