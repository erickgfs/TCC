import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #404040;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);

  h1 {
    text-align: center;
    color: #d3d3d3;
    margin: 20px;
  }

  button {
    align-self: center;
  }

  a {
    display: flex;
    align-items: center;
    align-self: center;
    text-decoration: none;
    font-weight: bold;
    color: #fff000;
    transition: color 0.2s;
    margin: 20px;

    &:hover {
      color: ${shade(0.2, '#fff000')};
    }

    svg {
      margin-right: 10px;
    }
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #d3d3d3;

  select {
    width: 50%;
    height: 71px;
    font-size: 30px;
    background-color: #fafafa;
    border-radius: 10px;
    border: 1px solid #000000;
    margin: 5px;
    padding: 10px 50px;
    border: 3px solid rgba(0, 0, 0, 0.2);
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);

    &:hover {
      border-color: #00dcb6;
    }
  }

  div {
    display: flex;
    margin: 5px;

    div {
      align-items: center;
    }
  }
`;
