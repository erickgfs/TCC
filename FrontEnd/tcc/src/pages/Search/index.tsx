import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { Form } from '@unform/web';

import InputMask from 'react-input-mask';
import { useAuth } from '../../context/AuthContext';

import { TitleContainer, Img, Container, FormContent, LogOut } from './styled';

import Logotipo from '../../assets/Coracao-logo.png';

import Button from '../../components/Button';
import api from '../../services/api';

interface dataFormater {
  cpf: string;
}

const Search: React.FC = () => {
  const { name, user_type, logOut } = useAuth();

  const [cpf, setCpf] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (
      user_type === undefined ||
      Number(user_type) === 1 ||
      user_type === null
    ) {
      history.push('/');
    }
  }, []);

  function logOutApp(): void {
    logOut();
    history.push('/');
  }

  function handleSubmit(data: dataFormater): void {
    data.cpf = cpf;
    api.get(`/search_patient_cpf/${data.cpf}`).then(response => {
      history.push('/information', data);
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
      <Container>
        <Form onSubmit={handleSubmit}>
          <FormContent>
            <h1>Pesquisar Paciente</h1>
            <InputMask
              className="inputMask"
              mask="999.999.999-99"
              name="cpf"
              placeholder="CPF"
              onChange={e => setCpf(e.target.value)}
            />
            <Button type="submit">Buscar</Button>
          </FormContent>
        </Form>
        <a href="/registration">
          <FiLogIn />
          Cadastrar Paciente
        </a>
      </Container>
    </>
  );
};

export default Search;
