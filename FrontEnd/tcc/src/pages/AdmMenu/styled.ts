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
  height: inherit;
  justify-content: center;

  a {
    font-size: 70px;
    display: flex;
    align-items: center;
    align-self: center;
    text-decoration: none;
    font-weight: bold;
    color: #d3d3d3;
    transition: color 0.2s;
    padding: 10px;
    margin: 10px;
    border: 1px solid;
    border-radius: 10px;
    background-color: #404040;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);

    &:hover {
      color: ${shade(0.2, '#00dcb6')};
    }

    svg {
      margin-right: 10px;
    }
  }
`;
