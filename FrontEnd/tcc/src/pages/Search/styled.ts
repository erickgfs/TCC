import styled from 'styled-components';
import { shade } from 'polished';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 300px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  margin: 50px;
  background-color: #404040;

  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);

  h1 {
    color: #d3d3d3;
    margin: 20px;
  }

  a {
    display: flex;
    align-items: center;
    align-self: center;
    text-decoration: none;
    font-weight: bold;
    color: #fff000;
    margin: 20px;
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

  .inputMask {
    background: #fafafa;
    padding: 16px;
    border-radius: 10px;
    align-self: center;
    margin: 15px 30px;
    border: 3px solid rgba(0, 0, 0, 0.2);
    box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);
    font-size: 30px;

    &:hover {
      border-color: #a6d5fa;
    }
  }

  h1 {
    align-self: center;
  }
`;
