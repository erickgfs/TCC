import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  padding: 16px;
  background: #00dcb6;
  border-radius: 10px;
  border: 0;
  font-size: 30px;
  align-self: center;
  margin: 15px 30px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#00dcb6')};
  }
`;
