import React, { useState, useCallback, useEffect } from 'react';
import { Form } from '@unform/web';
import {
  FiUser,
  FiEdit3,
  FiMap,
  FiBookmark,
  FiArrowLeft,
} from 'react-icons/fi';

import { Container, FormContent } from './styled';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

const Registration: React.FC = () => {
  interface DataFormats {
    nome: string;
    cpf: string;
    municipio: string;
    dataNascimento: string;
  }

  function handleSubmit(data: DataFormats): void {
    console.log(data);
  }

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
          <div>
            <select id="select-sexo">
              <option disabled selected>
                Sexo
              </option>
              <option>Masculino</option>
              <option>Feminino</option>
            </select>
            <select id="select-raca">
              <option disabled selected>
                Raça
              </option>
              <option>Branco</option>
              <option>Negro</option>
              <option>Amarelo</option>
              <option>Pardo</option>
            </select>
          </div>
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
