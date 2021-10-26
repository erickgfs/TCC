import React from 'react';

import { TitleContainer, Img, Container, ImgSmile } from './styles';

import Logotipo from '../../assets/Coracao-logo.png';
import NotFound from '../../assets/NotFound.png';

const ErrorNotPage: React.FC = () => {
  return (
    <>
      <TitleContainer>
        <Img src={Logotipo} alt="Logotipo" />
      </TitleContainer>
      <Container>
        <ImgSmile src={NotFound} alt="Logotipo" />
        <h1>404</h1>
        <p>Pagina não encontrada</p>
        <span>
          A página que você está procurando não existe ou ocorreu um outro erro.
        </span>
      </Container>
    </>
  );
};

export default ErrorNotPage;
