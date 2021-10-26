import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
  FiUser,
  FiEdit,
  FiMail,
  FiLock,
  FiArrowLeft,
  FiLogOut,
} from 'react-icons/fi';
import { Form } from '@unform/web';

import { TitleContainer, Img, FormContainer, LogOut } from './styles';
import { useAuth } from '../../context/AuthContext';

import Logotipo from '../../assets/Coracao-logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

interface dataFormat {
  name: string;
  crm: string;
  email: string;
  password: string;
  user_type: number;
}

const SingUp: React.FC = () => {
  const { name, user_type, logOut } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (
      user_type === undefined ||
      Number(user_type) === 0 ||
      user_type === null
    ) {
      history.push('/');
    }
  }, []);

  function logOutApp(): void {
    logOut();
    history.push('/');
  }

  function handleSubmit(data: dataFormat): void {
    data.user_type = 0;

    api.post('/users', data).then(response => {
      window.location.reload();
      console.log(response);
    });
    console.log(data);
  }

  return (
    <>
      <LogOut onClick={logOutApp}>
        <FiLogOut />
        Sair
      </LogOut>
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
          {/* <a href="/search">
            <FiArrowLeft />
            Voltar
          </a> */}
        </FormContainer>
      </Form>
    </>
  );
};

export default SingUp;
