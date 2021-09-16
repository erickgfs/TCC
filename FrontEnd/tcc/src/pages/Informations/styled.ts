import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

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

export const DadosPacienteDiv = styled.div`
  margin-left: 75px;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const SintomasExamesDiv = styled.div`
  display: flex;
  align-self: center;
`;

export const SintomasContainer = styled.div`
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 20px;
  font-size: 18px;
  min-width: 380px;
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  div {
    padding: 2px;
  }
`;

export const ExamesContainer = styled.div`
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 20px;
  font-size: 18px;
  min-width: 380px;
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  div {
    padding: 2px;
  }
`;

export const ResultadoContainer = styled.div`
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 65px;
  font-size: 20px;
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  div {
    padding: 2px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 10px;
  margin-top: 15px;
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  select {
    margin: 5px;
    font-size: 20px;
    border-radius: 10px;
    padding: 5px;
    background: #efefef;
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.2);

    &:hover {
      border-color: #00dcb6;
    }
  }

  div {
    margin: 5px 10px;
    align-self: center;

    .positive-buttom {
      background: #00dcb6;
      border: none;
      box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);

      &:hover {
        background: ${shade(0.2, '#00dcb6')};
      }
    }

    .negative-buttom {
      background: #ff0000a6;
      border: none;
      box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);

      &:hover {
        background: ${shade(0.2, '#ff0000a6')};
      }
    }

    .pendente-buttom {
      background: #fff0009c;
      border: none;
      box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);

      &:hover {
        background: ${shade(0.2, '#fff0009c')};
      }
    }

    button {
      padding: 5px;
      margin: 0px 5px;
      border-radius: 5px;
    }
  }
`;
