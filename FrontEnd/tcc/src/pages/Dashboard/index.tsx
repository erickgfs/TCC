import React from 'react';

import { Title, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Title>Suporte ao Diagnóstico de Doença de Chagas</Title>
      <Form>
        <h1>Faça seu login</h1>
        <input placeholder="E-mail"></input>
        <input type="password" placeholder="Senha"></input>
        <button>Entrar</button>
      </Form>
    </>
  );
};

export default Dashboard;
