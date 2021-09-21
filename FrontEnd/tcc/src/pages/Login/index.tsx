import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import { TitleContainer, Img, FormContainer } from './styles';

import Logotipo from '../../assets/Coracao-logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

const Login: React.FC = () => {
  function handleSubmit(data: object): void {
    // api.post('/auth', data).then(response => {
    //   console.log(response.data);

    //   const user = {
    //     token: response.data.token,
    //   };
    // });

    api.get('/municipios').then(response => {
      console.log(response.data);

      // const user = {
      //   token: response.data.token,
      // };
    });

    console.log(data);
  }

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
