import React from 'react';
import { FiEdit, FiBookOpen } from 'react-icons/fi';

import Logotipo from '../../assets/Coracao-logo.png';

import { TitleContainer, Img, Container } from './styled';

const AdmMenu: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Img src={Logotipo} alt="Logotipo" />
      </TitleContainer>
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
