import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

import { TitleContainer, Img, Form } from './styles';

import Logotipo from '../../assets/Coracao-logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
  return (
    <>
      <TitleContainer>
        <Img src={Logotipo} alt="Logotipo" />
      </TitleContainer>
      <Form>
        <h1>Faça seu login</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail"></Input>
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        ></Input>
        <Button type="submit">Entrar</Button>
      </Form>
    </>
  );
};

export default Login;
