import React, { useCallback } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import { useAuth } from '../../context/AuthContext';

import { TitleContainer, Img, FormContainer } from './styles';

import Logotipo from '../../assets/Coracao-logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { name, user_type, login } = useAuth();

  const handleSubmit = useCallback(
    (data: LoginFormData) => {
      login({ email: data.email, password: data.password });

      console.log(data);
    },
    [login],
  );

  return (
    <>
      <TitleContainer>
        <Img src={Logotipo} alt="Logotipo" />
      </TitleContainer>
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <h1>Faça seu login</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail"></Input>
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          ></Input>
          <Button type="submit">Entrar</Button>
        </FormContainer>
      </Form>
    </>
  );
};

export default Login;
