import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #404040;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);
  color: #d3d3d3;
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;

    a {
      display: flex;
      align-items: center;
      align-self: center;
      text-decoration: none;
      font-weight: bold;
      color: #fff000;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#fff000')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;

export const DadosPacienteDiv = styled.div`
  margin-left: 10px;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const DataInvesti = styled.div`
  display: flex;

  div {
    margin: 0;
    padding: 5px;
    width: 300px;
    input {
      font-size: 20px;
    }
  }

  button {
    font-size: 16px;
    padding: 12px;
  }
`;

export const TitlesAccordion = styled.div`
  font-size: 20px;
  border-top: 1px solid;
  padding: 10px;

  &:hover {
    background-color: ${shade(0.2, '#404040')};
  }
`;

export const SintomasContainer = styled.div`
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 20px;
  font-size: 18px;
  min-width: 380px;
  background-color: #404040;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);

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
  background-color: #404040;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);

  select {
    margin: 5px;
    font-size: 20px;
    border-radius: 10px;
    padding: 5px 10px;
    background: #efefef;
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);
    border: 3px solid rgba(0, 0, 0, 0.2);

    &:hover {
      border-color: #a6d5fa;
    }
  }

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
  background-color: #404040;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);

  div {
    padding: 2px;
  }
`;

export const EstadosVisitados = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  align-self: auto;
  font-size: 18px;
  margin-left: 10px;

  button {
    background-color: red;
    padding: 2px 8px;
    font-size: 15px;
    margin: 10px 10px;

    &:hover {
      background-color: ${shade(0.2, 'red')};
    }
  }
`;

export const VisitMunicipiosDiv = styled.div`
  display: flex;
  place-content: center;
  flex-wrap: wrap;

  div {
    padding: 5px 10px;
    input {
      font-size: 20px;
    }
  }

  svg {
    width: 15px;
    height: 15px;
  }

  select {
    width: fit-content;
    height: 41px;
    align-self: center;
    text-align-last: center;
    font-size: 20px;
    background-color: #fafafa;
    border-radius: 10px;
    border: 1px solid #000000;
    margin: 5px;
    padding: 5px 10px;
    border: 3px solid rgba(0, 0, 0, 0.2);
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);

    &:hover {
      border-color: #a6d5fa;
    }
  }
`;

export const SearchDiv = styled.div`
  display: flex;
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
    border: 3px solid rgba(0, 0, 0, 0.2);

    &:hover {
      border-color: #a6d5fa;
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

    button {
      padding: 5px;
      margin: 0px 5px;
      border-radius: 5px;
    }
  }
`;
