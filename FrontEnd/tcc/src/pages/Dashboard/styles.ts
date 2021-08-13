import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 5px;
  margin: 50px;

  h1 {
    align-self: center;
    margin: 15px 30px;
  }

  input {
    width: 50%;
    height: 50px;
    align-self: center;
    margin: 15px 30px;
    padding: 16px;
    background: #fafafa;
    border-radius: 10px;
    border: 1px solid;
    font-size: 30px;
  }

  button {
    width: 50%;
    padding: 16px;
    background: #e9bb4a;
    border-radius: 10px;
    border: 0;
    font-size: 30px;
    align-self: center;
    margin: 15px 30px;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#e9bb4a')};
    }
  }
`;
