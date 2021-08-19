import React from 'react';
import { FiUser, FiEdit, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import { TitleContainer, Img, FormContainer } from './styles';

import Logotipo from '../../assets/Logotipo-2.png';

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
          <Input name="cpf" icon={FiEdit} placeholder="CPF"></Input>
          <Input name="email" icon={FiMail} placeholder="E-mail"></Input>
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          ></Input>
          <Button type="submit">Cadastrar</Button>
        </FormContainer>
      </Form>
    </>
  );
};

export default SingUp;
