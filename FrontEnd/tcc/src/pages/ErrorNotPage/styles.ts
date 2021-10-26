import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 300px;
`;

export const ImgSmile = styled.img`
  width: 200px;
  align-self: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 5px;
  margin: 50px;
  background-color: #404040;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 50px;
    align-self: center;
    margin: 15px 30px;
    color: #ff0000a6;
  }

  p {
    font-size: 30px;
    align-self: center;
    margin: 15px 30px;
    color: #ff0000a6;
  }

  span {
    align-self: center;
    margin: 15px 30px;
    color: #d3d3d3;
  }
`;
