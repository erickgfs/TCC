import React from 'react';
import { FiSearch, FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, FormContent } from './styled';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Search: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
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
  );
};

export default Search;
