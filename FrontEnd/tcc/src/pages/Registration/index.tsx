import React, { useState } from 'react';
import { Form } from '@unform/web';
import {
  FiUser,
  FiEdit3,
  FiMap,
  FiBookmark,
  FiArrowLeft,
} from 'react-icons/fi';

import {
  Container,
  FormContent,
  EstadosContainer,
  VisitMunicipiosDiv,
} from './styled';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Registration: React.FC = () => {
  const [visitMunicipios, setVisitMunicipios] = useState<any>([]);

  function handleSubmit(data: object): void {
    console.log(data);
  }

  const addVisitMunicipios = (e: any) => {
    e.preventDefault();

    setVisitMunicipios([...visitMunicipios, '']);
  };

  const removeVisitMunicipios = (e: any) => {
    e.preventDefault();

    setVisitMunicipios(visitMunicipios.splice(1, visitMunicipios.length));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Cadastro de Paciente</h1>
        <FormContent>
          <div>
            <Input name="nome" icon={FiUser} placeholder="Nome"></Input>
            <Input name="cpf" icon={FiEdit3} placeholder="CPF"></Input>
          </div>
          <div>
            <Input
              name="municipio"
              icon={FiMap}
              placeholder="Município"
            ></Input>
            <Input
              name="dataNascimento"
              icon={FiBookmark}
              placeholder="Data de Nascimento"
            ></Input>
          </div>
          <EstadosContainer>
            <h2>Visitou outro município?</h2>
            <Button type="button" onClick={addVisitMunicipios}>
              +
            </Button>
            <Button type="button" onClick={removeVisitMunicipios}>
              -
            </Button>
          </EstadosContainer>
          <VisitMunicipiosDiv>
            {visitMunicipios.map((municipio: any, index: any) => (
              <Input
                name="visitMunicipio"
                icon={FiUser}
                placeholder="Município"
              ></Input>
            ))}
          </VisitMunicipiosDiv>
          <Button type="submit">Cadastrar</Button>
        </FormContent>
      </Form>
      <a href="/search">
        <FiArrowLeft />
        Voltar
      </a>
    </Container>
  );
};

export default Registration;
