import React from 'react';
import { useHistory } from 'react-router-dom';

import { FiSearch, FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';

import { TitleContainer, Img, Container, FormContent } from './styled';

import Logotipo from '../../assets/Coracao-logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

interface dataFormater {
  cpf: string;
}

const Search: React.FC = () => {
  const history = useHistory();

  function handleSubmit(data: dataFormater): void {
    api.get(`/search_patient_cpf/${data.cpf}`).then(response => {
      history.push('/information', data);
    });
    console.log(data);
  }

  return (
    <>
      <TitleContainer>
        <Img src={Logotipo} alt="Logotipo" />
      </TitleContainer>
      <Container>
        <Form onSubmit={handleSubmit}>
          <FormContent>
            <h1>Pesquisar Paciente</h1>
            <Input name="cpf" icon={FiSearch} placeholder="CPF"></Input>
            <Button type="submit">Buscar</Button>
          </FormContent>
        </Form>
        <a href="/registration">
          <FiLogIn />
          Cadastrar Paciente
        </a>
      </Container>
    </>
  );
};

export default Search;
