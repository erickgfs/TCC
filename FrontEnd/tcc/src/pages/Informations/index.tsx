import React, { useState, useCallback } from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import {
  Container,
  SintomasExamesDiv,
  SintomasContainer,
  ExamesContainer,
  ResultadoContainer,
} from './styled';

import { sintomas, exames } from '../../Auxiliar';

const Informations: React.FC = () => {
  const [edema, setEdema] = useState('Ignorado');
  const [meningoe, setMeningoe] = useState('Ignorado');
  const [poliadeno, setPoliadeno] = useState('Ignorado');
  const [febre, setFebre] = useState('Ignorado');
  const [hepatome, setHepatome] = useState('Ignorado');
  const [insuficiênciaCardíacaCongestiva, setInsuficiênciaCardíacaCongestiva] =
    useState('Ignorado');
  const [arritimias, setArritimias] = useState('Ignorado');
  const [asteniaPerdaDeForça, setAsteniaPerdaDeForça] = useState('Ignorado');
  const [esplenom, setEsplenom] = useState('Ignorado');
  const [chagoma, setChagoma] = useState('Ignorado');
  const [parasitológico, setParasitológico] = useState('Ignorado');
  const [xenodiagnóstico, setXenodiagnóstico] = useState('Ignorado');
  const [histopatológico, setHistopatológico] = useState('Ignorado');
  const [resultado, setResultado] = useState('Fudido');

  function handleSubmit() {
    const data = {
      cpf: '101.101.101-24',
      sintomas: {
        Edema: edema,
        Meningoe: meningoe,
        Poliadeno: poliadeno,
        Febre: febre,
        Hepatome: hepatome,
        InsuficiênciaCardíacaCongestiva: insuficiênciaCardíacaCongestiva,
        Arritimias: arritimias,
        AsteniaPerdaDeForça: asteniaPerdaDeForça,
        Esplenom: esplenom,
        Chagoma: chagoma,
      },
      exames: {
        Parasitológico: parasitológico,
        Xenodiagnóstico: xenodiagnóstico,
        Histopatológico: histopatológico,
      },
    };

    console.log(data);
  }

  const setPositive = useCallback(() => {
    const sintoma = (
      document.getElementById('sintomaSelect') as HTMLInputElement
    ).value;

    switch (sintoma) {
      case 'Edema':
        setEdema('Sim');
        break;

      case 'Meningoe':
        setMeningoe('Sim');
        break;

      case 'Poliadeno':
        setPoliadeno('Sim');
        break;

      case 'Febre':
        setFebre('Sim');
        break;

      case 'Hepatome':
        setHepatome('Sim');
        break;

      case 'Insuficiência Cardíaca Congestiva':
        setInsuficiênciaCardíacaCongestiva('Sim');
        break;

      case 'Arritimias':
        setArritimias('Sim');
        break;

      case 'Astenia Perda de força':
        setAsteniaPerdaDeForça('Sim');
        break;

      case 'Esplenom':
        setEsplenom('Sim');
        break;

      case 'Chagoma':
        setChagoma('Sim');
        break;

      default:
        break;
    }
  }, []);

  const setNegative = useCallback(() => {
    const sintoma = (
      document.getElementById('sintomaSelect') as HTMLInputElement
    ).value;

    switch (sintoma) {
      case 'Edema':
        setEdema('Não');
        break;

      case 'Meningoe':
        setMeningoe('Não');
        break;

      case 'Poliadeno':
        setPoliadeno('Não');
        break;

      case 'Febre':
        setFebre('Não');
        break;

      case 'Hepatome':
        setHepatome('Não');
        break;

      case 'Insuficiência Cardíaca Congestiva':
        setInsuficiênciaCardíacaCongestiva('Não');
        break;

      case 'Arritimias':
        setArritimias('Não');
        break;

      case 'Astenia Perda de força':
        setAsteniaPerdaDeForça('Não');
        break;

      case 'Esplenom':
        setEsplenom('Não');
        break;

      case 'Chagoma':
        setChagoma('Não');
        break;

      default:
        break;
    }
  }, []);

  const setPositiveExame = useCallback(() => {
    const exame = (document.getElementById('exameSelect') as HTMLInputElement)
      .value;

    switch (exame) {
      case 'Parasitológico':
        setParasitológico('Positivo');
        break;

      case 'Xenodiagnóstico':
        setXenodiagnóstico('Positivo');
        break;

      case 'Histopatológico':
        setHistopatológico('Positivo');
        break;

      default:
        break;
    }
  }, []);

  const setNegativeExame = useCallback(() => {
    const exame = (document.getElementById('exameSelect') as HTMLInputElement)
      .value;

    switch (exame) {
      case 'Parasitológico':
        setParasitológico('Negativo');
        break;

      case 'Xenodiagnóstico':
        setXenodiagnóstico('Negativo');
        break;

      case 'Histopatológico':
        setHistopatológico('Negativo');
        break;

      default:
        break;
    }
  }, []);

  const setNotAccomplishedExame = useCallback(() => {
    const exame = (document.getElementById('exameSelect') as HTMLInputElement)
      .value;

    switch (exame) {
      case 'Parasitológico':
        setParasitológico('Não realizado');
        break;

      case 'Xenodiagnóstico':
        setXenodiagnóstico('Não realizado');
        break;

      case 'Histopatológico':
        setHistopatológico('Não realizado');
        break;

      default:
        break;
    }
  }, []);

  return (
    <Container>
      <div>
        <div>
          <div>Nome: Farmacia Gostoso</div>
          <div>CPF: 101.101.101-24</div>
        </div>
        <div>
          <div>Data de nascimento: 24/04/1924</div>
          <div>Municipio Registrado: São Paulo</div>
        </div>
        <div>
          Municipios Visitados: Margarina delicia, Mecanica, casa do Paulo Guina
        </div>
      </div>
      <SintomasExamesDiv>
        <SintomasContainer>
          <div>Edema: {edema}</div>
          <div>Meningoe: {meningoe}</div>
          <div>Poliadeno: {poliadeno}</div>
          <div>Febre: {febre}</div>
          <div>Hepatome: {hepatome}</div>
          <div>
            Insuficiência Cardíaca Congestiva: {insuficiênciaCardíacaCongestiva}
          </div>
          <div>Arritimias: {arritimias}</div>
          <div>Astenia Perda de Força: {asteniaPerdaDeForça}</div>
          <div>Esplenom: {esplenom}</div>
          <div>Chagoma: {chagoma}</div>
          <select id="sintomaSelect">
            {sintomas &&
              sintomas.map((sintoma: string) => (
                <option key={sintoma}>{sintoma}</option>
              ))}
          </select>
          <button onClick={setPositive}>Sim</button>
          <button onClick={setNegative}>Não</button>
        </SintomasContainer>
        <ExamesContainer>
          <div>Parasitológico: {parasitológico}</div>
          <div>Parasitológico Xenodiagnóstico: {xenodiagnóstico}</div>
          <div>Histopatológico: {histopatológico}</div>
          <select id="exameSelect">
            {exames &&
              exames.map((exame: string) => (
                <option key={exame}>{exame}</option>
              ))}
          </select>
          <button onClick={setPositiveExame}>Positivo</button>
          <button onClick={setNegativeExame}>Negativo</button>
          <button onClick={setNotAccomplishedExame}>Pendente</button>
        </ExamesContainer>
      </SintomasExamesDiv>
      <ResultadoContainer>
        <div>Resultado: {resultado}</div>
      </ResultadoContainer>
      <button type="button" onClick={handleSubmit}>
        Atualizar
      </button>
      <a href="/search">
        <FiArrowLeft />
        Voltar
      </a>
    </Container>
  );
};

export default Informations;
