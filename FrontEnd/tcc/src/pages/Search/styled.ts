import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  place-content: center;

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

  h1 {
    align-self: center;
  }
`;
