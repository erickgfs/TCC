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

  div {
    .inputMask {
      background: #fafafa;
      padding: 16px;
      border-radius: 10px;
      align-self: center;
      margin: 5px;
      border: 3px solid rgba(0, 0, 0, 0.2);
      box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);

      flex: 1;
      font-size: 30px;

      &:hover {
        border-color: #a6d5fa;
      }
    }
  }

  select {
    width: 50%;
    height: 71px;
    font-size: 30px;
    background-color: #fafafa;
    border-radius: 10px;
    border: 1px solid #000000;
    margin: 5px;
    padding: 10px;
    border: 3px solid rgba(0, 0, 0, 0.2);
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);

    &:hover {
      border-color: #a6d5fa;
    }
  }

  div {
    display: flex;
    margin: 5px;

    div {
      align-items: center;
    }
  }

  .p-inputwrapper-focus {
    border-color: #a6d5fa;
  }

  #autocomplete {
    height: 75px;
    width: 50%;
    background: #fafafa;
    border-radius: 10px;
    align-self: center;
    margin: 5px;
    border: 3px solid rgba(0, 0, 0, 0.2);
    box-shadow: 3px 3px 2px 1px rgb(0 0 0 / 20%);

    &:hover {
      border-color: #a6d5fa;
    }

    button {
      height: 70px;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      background: transparent;
      color: #000000;
      border: transparent;
    }

    input {
      width: 100%;
      padding: 10px;
      font-size: 30px;
      font-family: Roboto, sans-serif;
      color: #000000;

      &:hover {
        border-color: #a6d5fa;
      }
    }
  }
`;

export const LogOut = styled.a`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: end;
  text-decoration: none;
  font-weight: bold;
  color: #ff0000a6;
  transition: color 0.2s;
  margin: 10px;
  cursor: pointer;

  &:hover {
    color: ${shade(0.2, '#ff0000a6')};
  }

  svg {
    margin-right: 10px;
  }
`;
