import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fafafa;
  padding: 16px;
  border-radius: 10px;
  align-self: center;
  margin: 15px 30px;
  border: 3px solid rgba(0, 0, 0, 0.2);
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.2);
  &:hover {
    border-color: #a6d5fa;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #a6d5fa;
      border-color: #a6d5fa;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #a6d5fa;
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
