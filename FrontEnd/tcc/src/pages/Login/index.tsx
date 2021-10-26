import React, { useCallback } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import { useAuth } from '../../context/AuthContext';

import { TitleContainer, Img, FormContainer } from './styles';

import Logotipo from '../../assets/Coracao-logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { name, user_type, login } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      const response: any = await login({
        email: data.email,
        password: data.password,
      });
      const { userType, userName } = response;

      if (Number(userType) === 0) {
        history.push('/search', data);
      } else if (Number(userType) === 1) {
        history.push('/sing-up', data);
      }

      console.log('response', response);
      console.log('user_type', user_type);
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
