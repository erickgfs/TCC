import React from 'react';
import { FiUser, FiEdit, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import { TitleContainer, Img, FormContainer } from './styles';

import Logotipo from '../../assets/Coracao-logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SingUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <>
      <TitleContainer>
        <Img src={Logotipo} alt="Logotipo" />
      </TitleContainer>
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <h1>Cadastro de médico</h1>
          <Input name="name" icon={FiUser} placeholder="Nome"></Input>
          <Input name="crm" icon={FiEdit} placeholder="CRM"></Input>
          <Input name="email" icon={FiMail} placeholder="E-mail"></Input>
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          ></Input>
          <Button type="submit">Cadastrar</Button>
          <a href="/search">
            <FiArrowLeft />
            Voltar
          </a>
        </FormContainer>
      </Form>
    </>
  );
};

export default SingUp;
