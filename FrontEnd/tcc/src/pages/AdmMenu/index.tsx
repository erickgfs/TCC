import React from 'react';
import { FiEdit, FiBookOpen } from 'react-icons/fi';

import { Container } from './styled';

const AdmMenu: React.FC = () => {
  return (
    <Container>
      <a href="sing-up">
        <FiEdit />
        Cadastrar Médico
      </a>
      <a href="documentation">
        <FiBookOpen />
        Documentação
      </a>
    </Container>
  );
};

export default AdmMenu;
