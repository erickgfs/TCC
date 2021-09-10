import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
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
    color: #555555;
    transition: color 0.2s;

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

  div {
    display: flex;
    margin: 5px;

    div {
      align-items: center;
    }
  }
`;

export const EstadosVisitados = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  align-self: auto;
  font-size: 20px;

  button {
    background-color: red;
    padding: 3px 12px;
    font-size: 20px;

    &:hover {
      background-color: ${shade(0.2, 'red')};
    }
  }
`;

export const VisitMunicipiosDiv = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  flex-wrap: wrap;

  select {
    width: fit-content;
    height: 71px;
    align-self: center;
    text-align-last: center;
    font-size: 30px;
    background-color: #fafafa;
    border-radius: 10px;
    border: 1px solid #000000;
    margin: 5px;
    padding: 10px;
  }
`;

export const DivButtonsSearch = styled.div`
  display: flex;
  place-content: center;
  flex-wrap: wrap;

  button {
    margin: 5px;
    padding: 10px;
    font-weight: bold;
    color: #ffffff;
    background: #2ebff1;
    border-radius: 5px;
  }
`;

export const EstadosContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 0 0 0 10px;
    padding: 5px 10px;
    font-size: 16px;
  }

  button + button {
    background-color: red;
    padding: 3px 12px;
    font-size: 20px;

    &:hover {
      background-color: ${shade(0.2, 'red')};
    }
  }
`;
