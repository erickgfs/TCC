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
  margin-left: 85px;
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

  div {
    padding: 2px;
  }
`;

export const ResultadoContainer = styled.div`
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 75px;
  font-size: 20px;

  div {
    padding: 2px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 10px;

  margin-top: 20px;

  div {
    align-self: center;
  }
`;
