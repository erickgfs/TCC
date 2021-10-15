import React, { useState, useCallback, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { FiArrowLeft, FiMapPin, FiBookmark } from 'react-icons/fi';
import { Form } from '@unform/web';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import InputMask from 'react-input-mask';

import {
  Container,
  DadosPacienteDiv,
  DataInvesti,
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
  const [idPatient, setIdPatient] = useState();
  const [id_ocupa_n, setId_ocupa_n] = useState<number>();
  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [sexo, setSexo] = useState();
  const [municipio, setMunicipio] = useState();
  const [dt_invest, setDt_invest] = useState<string>();
  const [dt_investShow, setDt_investShow] = useState<string>();
  const [assintoma, setAssintoma] = useState<number>();
  const [edema, setEdema] = useState<number>();
  const [meningoe, setMeningoe] = useState<number>();
  const [poliadeno, setPoliadeno] = useState<number>();
  const [febre, setFebre] = useState<number>();
  const [hepatome, setHepatome] = useState<number>();
  const [insuficiênciaCardíacaCongestiva, setInsuficiênciaCardíacaCongestiva] =
    useState<number>();
  const [arritmias, setArritmias] = useState<number>();
  const [asteniaPerdaDeForça, setAsteniaPerdaDeForça] = useState<number>();
  const [esplenom, setEsplenom] = useState<number>();
  const [chagoma, setChagoma] = useState<number>();
  const [parasitológico, setParasitológico] = useState<number>();
  const [xenodiagnóstico, setXenodiagnóstico] = useState<number>();
  const [historia, setHistoria] = useState<number>();
  const [gestacao, setGestacao] = useState<number>();
  const [resultado, setResultado] = useState('Fudido');
  const [siglasEstados, setSiglasEstados] = useState<any>([]);
  const [sugestaoMunicipios, setSugestaoMunicipios] = useState<any>([]);
  const [filterMunicipios, setFilterMunicipios] = useState<any>([]);
  const [searchValues, setSearchValues] = useState<any>([]);
  const [searchValuesState, setSearchValuesState] = useState<any>([]);
  const [visitStates, setVisitStates] = useState<any>([]);
  const [visitCounties, setVisitCounties] = useState<any>([]);
  const location = useLocation<any>();

  interface dataFormat {
    dt_invest: string;
    visitMunicipio: string;
  }

  const populateVariables = useCallback(data => {
    console.log('data', data);
    setName(data.name);
    setCpf(data.cpf);
    setIdPatient(data.id);
    setDataNascimento(data.dt_nasc.split('-').reverse().join('/'));
    setMunicipio(data.county.name);
    setSexo(data.sex);
    setId_ocupa_n(data.info_patient.id_ocupa_n);
    if (data.info_patient.dt_invest) {
      setDt_invest(data.info_patient.dt_invest);
      setDt_investShow(
        data.info_patient.dt_invest.split('-').reverse().join('/'),
      );
    }
    setAssintoma(data.info_patient.assintoma);
    setEdema(data.info_patient.edema);
    setMeningoe(data.info_patient.meningoe);
    setPoliadeno(data.info_patient.poliadeno);
    setFebre(data.info_patient.febre);
    setHepatome(data.info_patient.hepatome);
    setInsuficiênciaCardíacaCongestiva(data.info_patient.sinais_icc);
    setArritmias(data.info_patient.arritmias);
    setAsteniaPerdaDeForça(data.info_patient.astenia);
    setEsplenom(data.info_patient.esplenom);
    setChagoma(data.info_patient.chagoma);
    setParasitológico(data.info_patient.exame);
    setXenodiagnóstico(data.info_patient.xenodiag);
    setHistoria(data.info_patient.historia);
    setGestacao(data.info_patient.cs_gestant);
  }, []);

  useEffect(() => {
    const { state } = location;

    api.get(`/search_patient_cpf/${state.cpf}`).then(response => {
      const { data } = response;
      populateVariables(data.data);

      if (data.data.sex === 'F' && data.data.info_patient.cs_gestant !== 9) {
        (document.getElementById('tempoGestacao') as HTMLInputElement).value =
          data.data.info_patient.cs_gestant;
      }

      api.get('/states').then(responseStates => {
        const statesSearch = [
          data.data.info_patient.ant_uf_1,
          data.data.info_patient.ant_uf_2,
          data.data.info_patient.ant_uf_3,
        ];

        const newStatesSearch = [];
        const newVisitState = [];
        for (let i = 0; i < statesSearch.length; i += 1) {
          if (statesSearch[i] !== 10000) {
            const newState = responseStates.data.data.filter(
              (estado: any) => estado.id === statesSearch[i],
            );
            newStatesSearch.push(newState[0].initials);
            newVisitState.push(newState[0]);
          }
        }

        setSearchValuesState(newStatesSearch);
        setVisitStates(newVisitState);
      });

      api.get('/municipios').then(responseCounties => {
        const countiesSearch = [
          data.data.info_patient.mun_1,
          data.data.info_patient.mun_2,
          data.data.info_patient.mun_3,
        ];

        const newCountiesSearch = [];
        const newVisitCounties = [];
        for (let i = 0; i < countiesSearch.length; i += 1) {
          if (countiesSearch[i] !== 10000) {
            const newCounty = responseCounties.data.data.filter(
              (estado: any) => estado.id === countiesSearch[i],
            );

            newCountiesSearch.push(newCounty[0].name);
            newVisitCounties.push(newCounty[0]);
          }
        }

        setSearchValues(newCountiesSearch);
        setVisitCounties(newVisitCounties);
      });
    });

    api.get(`/result/${state.cpf}`).then(responseResult => {
      console.log(responseResult.data);
    });

    api.get('/states').then(response => {
      setSiglasEstados(response.data.data);
    });
  }, []);

  function handleSubmit(data: dataFormat) {
    const form = {
      dt_invest,
      id_ocupa_n,
      assintoma,
      edema,
      meningoe,
      poliadeno,
      febre,
      hepatome,
      sinais_icc: insuficiênciaCardíacaCongestiva,
      arritmias,
      astenia: asteniaPerdaDeForça,
      esplenom,
      chagoma,
      exame: parasitológico,
      xenodiag: xenodiagnóstico,
      historia,
      cs_gestant: gestacao,
      mun_1: visitCounties[0] ? visitCounties[0].id : 10000,
      mun_2: visitCounties[1] ? visitCounties[1].id : 10000,
      mun_3: visitCounties[2] ? visitCounties[2].id : 10000,
      ant_uf_1: visitStates[0] ? visitStates[0].id : 10000,
      ant_uf_2: visitStates[1] ? visitStates[1].id : 10000,
      ant_uf_3: visitStates[2] ? visitStates[2].id : 10000,
    };

    api.put(`/info_patient/${idPatient}`, form).then(response => {
      console.log(response);
      window.location.reload();
    });
    console.log(form);
  }

  const setDtInvestigation = useCallback(() => {
    const dtInvestigation = (
      document.getElementById('dt_invest') as HTMLInputElement
    ).value;

    if (dtInvestigation.length === 10) {
      setDt_invest(
        new Date(dtInvestigation).toISOString().slice(0, 19).replace('T', ' '),
      );
      setDt_investShow(dtInvestigation);
    }
  }, []);

  const stringResultOcupacao = useCallback(data => {
    let resultString = '';
    if (data === 0) resultString = 'Não';
    else if (data === 1) resultString = 'Sim';
    else resultString = 'Ignorado';
    return resultString;
  }, []);

  const stringResultSintoma = useCallback(data => {
    let resultString = '';
    if (data === 1) resultString = 'Sim';
    else if (data === 2) resultString = 'Não';
    else resultString = 'Ignorado';
    return resultString;
  }, []);

  const stringResultExame = useCallback(data => {
    let resultString = '';
    if (data === 1) resultString = 'Positivo';
    else if (data === 2) resultString = 'Negativo';
    else resultString = 'Ignorado';
    return resultString;
  }, []);

  const setPositive = useCallback(() => {
    const sintoma = (
      document.getElementById('sintomaSelect') as HTMLInputElement
    ).value;

    switch (sintoma) {
      case 'Assintomática':
        setAssintoma(1);
        break;

      case 'Edema':
        setEdema(1);
        break;

      case 'Meningoe':
        setMeningoe(1);
        break;

      case 'Poliadeno':
        setPoliadeno(1);
        break;

      case 'Febre':
        setFebre(1);
        break;

      case 'Hepatome':
        setHepatome(1);
        break;

      case 'Insuficiência Cardíaca Congestiva':
        setInsuficiênciaCardíacaCongestiva(1);
        break;

      case 'Arritmias':
        setArritmias(1);
        break;

      case 'Astenia Perda de força':
        setAsteniaPerdaDeForça(1);
        break;

      case 'Esplenom':
        setEsplenom(1);
        break;

      case 'Chagoma':
        setChagoma(1);
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
      case 'Assintomática':
        setAssintoma(2);
        break;

      case 'Edema':
        setEdema(2);
        break;

      case 'Meningoe':
        setMeningoe(2);
        break;

      case 'Poliadeno':
        setPoliadeno(2);
        break;

      case 'Febre':
        setFebre(2);
        break;

      case 'Hepatome':
        setHepatome(2);
        break;

      case 'Insuficiência Cardíaca Congestiva':
        setInsuficiênciaCardíacaCongestiva(2);
        break;

      case 'Arritmias':
        setArritmias(2);
        break;

      case 'Astenia Perda de força':
        setAsteniaPerdaDeForça(2);
        break;

      case 'Esplenom':
        setEsplenom(2);
        break;

      case 'Chagoma':
        setChagoma(2);
        break;

      default:
        break;
    }
  }, []);

  const setPositiveOcupacao = useCallback(() => {
    setId_ocupa_n(1);
  }, []);

  const setNegativeOcupacao = useCallback(() => {
    setId_ocupa_n(0);
  }, []);

  const setPositiveExame = useCallback(() => {
    const exame = (document.getElementById('exameSelect') as HTMLInputElement)
      .value;

    switch (exame) {
      case 'Parasitológico':
        setParasitológico(1);
        break;

      case 'Xenodiagnóstico':
        setXenodiagnóstico(1);
        break;

      case 'Transfusão Sanguínea':
        setHistoria(1);
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
        setParasitológico(2);
        break;

      case 'Xenodiagnóstico':
        setXenodiagnóstico(2);
        break;

      case 'Transfusão Sanguínea':
        setHistoria(2);
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
    setSugestaoMunicipios(handleSugestion(e.target.value));
  };

  const changeInput = (e: any, sugestao: any) => {
    if (searchValues.length < 3) {
      if (!searchValues.includes(e.target.value)) {
        const estado = (
          document.getElementById('select-estado') as HTMLInputElement
        ).value;

        api.get('/states').then(response => {
          const states = response.data.data;

          const state = states.filter((valor: any) => {
            const valorMinusculo = valor.initials.toLowerCase();
            const estadoMinusculo = estado.toLowerCase();

            return valorMinusculo.includes(estadoMinusculo);
          });

          setVisitStates([...visitStates, state[0]]);
        });

        setVisitCounties([...visitCounties, sugestao]);
        setSearchValues([...searchValues, e.target.value]);
        setSearchValuesState([...searchValuesState, estado]);
      }
    }
  };

  const removeVisitMunicipios = (e: any, index: number) => {
    e.preventDefault();
    console.log(e.target.value);

    if (searchValues.includes(e.target.value)) {
      searchValuesState.splice(index, 1);
      setSearchValuesState(searchValuesState);

      setSearchValues(
        searchValues.filter((values: string) => values !== e.target.value),
      );

      visitStates.splice(index, 1);
      setVisitStates(visitStates);
      setVisitCounties(
        visitCounties.filter((values: any) => values.name !== e.target.value),
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
          {!dt_invest || dt_invest === '' ? (
            <DataInvesti>
              <div>
                <InputMask
                  id="dt_invest"
                  mask="99/99/9999"
                  name="dt_nasc"
                  placeholder="Data de Nascimento"
                />
              </div>

              <Button type="button" onClick={setDtInvestigation}>
                Confirmar
              </Button>
            </DataInvesti>
          ) : (
            <div>
              <div>Data de Investigação: {dt_investShow}</div>
            </div>
          )}
        </DadosPacienteDiv>

        <Accordion>
          <AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <TitlesAccordion>Ocupação:</TitlesAccordion>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <SintomasContainer>
                  <div>
                    Trabalha em zona Rural: {stringResultOcupacao(id_ocupa_n)}
                  </div>
                  <SelectContainer>
                    <div>
                      <button
                        type="button"
                        className="positive-buttom"
                        onClick={setPositiveOcupacao}
                      >
                        Sim
                      </button>
                      <button
                        type="button"
                        className="negative-buttom"
                        onClick={setNegativeOcupacao}
                      >
                        Não
                      </button>
                    </div>
                  </SelectContainer>
                </SintomasContainer>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <TitlesAccordion>Sintomas:</TitlesAccordion>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <SintomasContainer>
                <div>Assintomático: {stringResultSintoma(assintoma)}</div>
                <div>Edema: {stringResultSintoma(edema)}</div>
                <div>Meningoe: {stringResultSintoma(meningoe)}</div>
                <div>Poliadeno: {stringResultSintoma(poliadeno)}</div>
                <div>Febre: {stringResultSintoma(febre)}</div>
                <div>Hepatome: {stringResultSintoma(hepatome)}</div>
                <div>
                  Insuficiência Cardíaca Congestiva:{' '}
                  {stringResultSintoma(insuficiênciaCardíacaCongestiva)}
                </div>
                <div>Arritmias: {stringResultSintoma(arritmias)}</div>
                <div>
                  Astenia Perda de Força:{' '}
                  {stringResultSintoma(asteniaPerdaDeForça)}
                </div>
                <div>Esplenom: {stringResultSintoma(esplenom)}</div>
                <div>Chagoma: {stringResultSintoma(chagoma)}</div>
                <SelectContainer>
                  <select id="sintomaSelect">
                    {sintomas &&
                      sintomas.map((sintoma: string) => (
                        <option key={sintoma}>{sintoma}</option>
                      ))}
                  </select>
                  <div>
                    <button
                      type="button"
                      className="positive-buttom"
                      onClick={setPositive}
                    >
                      Sim
                    </button>
                    <button
                      type="button"
                      className="negative-buttom"
                      onClick={setNegative}
                    >
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
                <div>Transfusão Sanguínea: {stringResultExame(historia)}</div>
                <div>Parasitológico: {stringResultExame(parasitológico)}</div>
                <div>
                  Parasitológico Xenodiagnóstico:{' '}
                  {stringResultExame(xenodiagnóstico)}
                </div>
                <SelectContainer>
                  <select id="exameSelect">
                    {exames &&
                      exames.map((exame: string) => (
                        <option key={exame}>{exame}</option>
                      ))}
                  </select>
                  <div>
                    <button
                      type="button"
                      className="positive-buttom"
                      onClick={setPositiveExame}
                    >
                      Positivo
                    </button>
                    <button
                      type="button"
                      className="negative-buttom"
                      onClick={setNegativeExame}
                    >
                      Negativo
                    </button>
                  </div>
                </SelectContainer>
              </ExamesContainer>
              {sexo === 'F' && (
                <ExamesContainer>
                  <div>
                    Tempo de Gestação:
                    <select id="tempoGestacao" onChange={changeTime}>
                      <option disabled selected>
                        Ignorado
                      </option>
                      <option value={1}>Primeiro Trimeste</option>
                      <option value={2}>Segundo Trimeste</option>
                      <option value={3}>Terceiro Trimeste</option>
                      <option value={4}>Não se aplica</option>
                    </select>
                  </div>
                </ExamesContainer>
              )}
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
                            onClick={e => removeVisitMunicipios(e, index)}
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
                          onClick={e => changeInput(e, sugestao)}
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
          <div>
            <select>
              <option value={0}>Chagas Negativo</option>
              <option value={1}>Chagas Positivo</option>
            </select>
          </div>
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
