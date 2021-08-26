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
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    place-self: center;
    margin: 5px;

    div {
      align-items: center;
    }
  }
`;

export const VisitMunicipiosDiv = styled.div`
  display: flex;
  place-content: center;
  flex-wrap: wrap;
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
