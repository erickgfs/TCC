import React from 'react';

import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import { TitleContainer, Img, Form } from './styles';

import Logotipo from '../../assets/Coracao-logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SingUp: React.FC = () => {
  return (
    <>
      <TitleContainer>
        <Img src={Logotipo} alt="Logotipo" />
      </TitleContainer>
      <Form>
        <h1>Cadastro de médico</h1>
        <Input name="name" icon={FiUser} placeholder="Nome"></Input>
        <Input name="cpf" icon={FiUser} placeholder="CPF"></Input>
        <Input name="email" icon={FiMail} placeholder="E-mail"></Input>
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        ></Input>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
};

export default SingUp;
