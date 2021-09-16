import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fafafa;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #000000;
  align-self: center;
  margin: 15px 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);

  ${props =>
    props.isFocused &&
    css`
      color: #00dcb6;
      border-color: #00dcb6;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #00dcb6;
    `}

  input {
    flex: 1;
    background: transparent;
    border: none;
    font-size: 30px;
  }

  svg {
    margin-right: 16px;
  }
`;
