import styled from 'styled-components';
import { shade } from 'polished';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 200px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 5px;
  margin: 50px;
  background-color: #404040;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);

  h1 {
    align-self: center;
    margin: 15px 30px;
    color: #d3d3d3;
  }

  div {
    margin: 10px 30px;
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
