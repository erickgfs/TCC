import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { FiArrowLeft, FiMapPin } from 'react-icons/fi';
import { Form } from '@unform/web';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import {
  Container,
  DadosPacienteDiv,
  SintomasContainer,
  TitlesAccordion,
  ExamesContainer,
  ResultadoContainer,
  EstadosVisitados,
  VisitMunicipiosDiv,
  SearchDiv,
  DivButtonsSearch,
  SelectContainer,
} from './styled';

import { sintomas, exames } from '../../Auxiliar';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

const Informations: React.FC = () => {
  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [municipio, setMunicipio] = useState();
  const [edema, setEdema] = useState('---');
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
  const [gestacao, setGestacao] = useState('Ignorado');
  const [resultado, setResultado] = useState('Fudido');
  const [siglasEstados, setSiglasEstados] = useState<any>([]);
  const [sugestaoMunicipios, setSugestaoMunicipios] = useState<any>([]);
  const [filterMunicipios, setFilterMunicipios] = useState<any>([]);
  const [searchValues, setSearchValues] = useState<any>([]);
  const [searchValuesState, setSearchValuesState] = useState<any>([]);
  const location = useLocation<any>();

  useEffect(() => {
    const { state } = location;

    console.log('teste', state.cpf);
    api.get(`/search_patient_cpf/${state.cpf}`).then(response => {
      const { data } = response;
      setName(data.data.name);
      setCpf(data.data.cpf);
      setDataNascimento(data.data.dt_nasc.split('-').reverse().join('/'));
      setMunicipio(data.data.residenceMunId);
      console.log('response', response);
    });

    api.get('/states').then(response => {
      setSiglasEstados(response.data.data);
    });
  }, []);

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
        Gestação: gestacao,
      },
      visitMunicipio: searchValues,
      visitEstado: searchValuesState,
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

  const changeTime = useCallback((e: any) => {
    setGestacao(e.target.value);
  }, []);

  const handleSugestion = (searchValue: any) => {
    return filterMunicipios.filter((valor: any) => {
      const valorMinusculo = valor.name.toLowerCase();
      const cidadeMinusculo = searchValue.toLowerCase();

      return valorMinusculo.includes(cidadeMinusculo);
    });
  };

  const disabledPlaceHolder = useCallback(
    (e: any) => {
      const estadoSelected = siglasEstados.filter((estado: any) => {
        const valorMinusculo = estado.initials.toLowerCase();
        const estadoMinusculo = e.target.value.toLowerCase();

        return valorMinusculo.includes(estadoMinusculo);
      });

      api.get(`/municipios/${estadoSelected[0].id}`).then(response => {
        setFilterMunicipios(response.data.data);
        console.log(response.data.data);
      });

      (document.getElementById('municipioPesquisa') as HTMLInputElement).value =
        '';

      setSugestaoMunicipios([]);

      document
        .getElementById('placeHolderEstado')
        ?.setAttribute('disabled', 'true');
    },
    [siglasEstados],
  );

  const autoComplete = (e: any) => {
    console.log(handleSugestion(e.target.value));
    setSugestaoMunicipios(handleSugestion(e.target.value));
  };

  const changeInput = (e: any) => {
    if (searchValues.length < 3) {
      if (!searchValues.includes(e.target.value)) {
        const estado = (
          document.getElementById('select-estado') as HTMLInputElement
        ).value;
        setSearchValues([...searchValues, e.target.value]);
        setSearchValuesState([...searchValuesState, estado]);
      }
    }
  };

  const removeVisitMunicipios = (e: any) => {
    e.preventDefault();

    if (searchValues.includes(e.target.value)) {
      const indexArray = searchValues.indexOf(e.target.value);
      searchValuesState.splice(indexArray, 1);
      setSearchValuesState(searchValuesState);

      setSearchValues(
        searchValues.filter((values: string) => values !== e.target.value),
      );
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <DadosPacienteDiv>
          <div>
            <div>Nome: {name}</div>
            <div>CPF: {cpf}</div>
          </div>
          <div>
            <div>Data de nascimento: {dataNascimento}</div>
            <div>Municipio: {municipio}</div>
          </div>
        </DadosPacienteDiv>

        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <TitlesAccordion>Sintomas:</TitlesAccordion>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <SintomasContainer>
                <div>Edema: {edema}</div>
                <div>Meningoe: {meningoe}</div>
                <div>Poliadeno: {poliadeno}</div>
                <div>Febre: {febre}</div>
                <div>Hepatome: {hepatome}</div>
                <div>
                  Insuficiência Cardíaca Congestiva:{' '}
                  {insuficiênciaCardíacaCongestiva}
                </div>
                <div>Arritimias: {arritimias}</div>
                <div>Astenia Perda de Força: {asteniaPerdaDeForça}</div>
                <div>Esplenom: {esplenom}</div>
                <div>Chagoma: {chagoma}</div>
                <SelectContainer>
                  <select id="sintomaSelect">
                    {sintomas &&
                      sintomas.map((sintoma: string) => (
                        <option key={sintoma}>{sintoma}</option>
                      ))}
                  </select>
                  <div>
                    <button className="positive-buttom" onClick={setPositive}>
                      Sim
                    </button>
                    <button className="negative-buttom" onClick={setNegative}>
                      Não
                    </button>
                  </div>
                </SelectContainer>
              </SintomasContainer>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <TitlesAccordion>Exames:</TitlesAccordion>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ExamesContainer>
                <div>Parasitológico: {parasitológico}</div>
                <div>Parasitológico Xenodiagnóstico: {xenodiagnóstico}</div>
                <div>Histopatológico: {histopatológico}</div>
                <SelectContainer>
                  <select id="exameSelect">
                    {exames &&
                      exames.map((exame: string) => (
                        <option key={exame}>{exame}</option>
                      ))}
                  </select>
                  <div>
                    <button
                      className="positive-buttom"
                      onClick={setPositiveExame}
                    >
                      Positivo
                    </button>
                    <button
                      className="negative-buttom"
                      onClick={setNegativeExame}
                    >
                      Negativo
                    </button>
                    <button
                      className="pendente-buttom"
                      onClick={setNotAccomplishedExame}
                    >
                      Pendente
                    </button>
                  </div>
                </SelectContainer>
              </ExamesContainer>
              <ExamesContainer>
                <div>
                  Tempo de Gestação:
                  <select onChange={changeTime}>
                    <option disabled selected>
                      Ignorado
                    </option>
                    <option>Primeiro Trimeste</option>
                    <option>Segundo Trimeste</option>
                    <option>Terceiro Trimeste</option>
                    <option>Não se aplica</option>
                  </select>
                </div>
              </ExamesContainer>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <TitlesAccordion>Estados Visitados:</TitlesAccordion>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <EstadosVisitados>
                {searchValues.length > 0 &&
                  searchValues.map((value: string, index: number) => {
                    return (
                      <>
                        <div id="visitMunicipio">
                          {searchValuesState[index]} - {value}
                          <Button
                            type="button"
                            onClick={removeVisitMunicipios}
                            value={value}
                          >
                            x
                          </Button>
                        </div>
                      </>
                    );
                  })}
              </EstadosVisitados>

              <VisitMunicipiosDiv>
                <SearchDiv>
                  <select id="select-estado" onChange={disabledPlaceHolder}>
                    <option id="placeHolderEstado">Estado</option>
                    {siglasEstados &&
                      siglasEstados.map((estado: any) => (
                        <option key={estado.id}>{estado.initials}</option>
                      ))}
                  </select>
                  <Input
                    id="municipioPesquisa"
                    onChange={autoComplete}
                    name="visitMunicipio"
                    icon={FiMapPin}
                    placeholder="Pesquisar município"
                  ></Input>
                </SearchDiv>
                <DivButtonsSearch>
                  {sugestaoMunicipios.length < 7 &&
                    sugestaoMunicipios.map((sugestao: any) => {
                      return (
                        <button
                          type="button"
                          key={sugestao.id}
                          onClick={changeInput}
                          value={sugestao.name}
                        >
                          {sugestao.name}
                        </button>
                      );
                    })}
                </DivButtonsSearch>
              </VisitMunicipiosDiv>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <ResultadoContainer>
          <div>Resultado: {resultado}</div>
        </ResultadoContainer>
        <Button type="submit">Atualizar</Button>
        <a href="/search">
          <FiArrowLeft />
          Voltar
        </a>
      </Form>
    </Container>
  );
};

export default Informations;
