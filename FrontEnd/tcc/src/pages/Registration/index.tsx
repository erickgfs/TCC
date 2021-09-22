import React, { useState, useCallback, useEffect } from 'react';
import { Form } from '@unform/web';
import {
  FiUser,
  FiEdit3,
  FiMap,
  FiMapPin,
  FiBookmark,
  FiArrowLeft,
} from 'react-icons/fi';

import {
  Container,
  FormContent,
  EstadosContainer,
  EstadosVisitados,
  VisitMunicipiosDiv,
  DivButtonsSearch,
} from './styled';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

const Registration: React.FC = () => {
  const [visitMunicipios, setVisitMunicipios] = useState<any>([]);
  const [siglasEstados, setSiglasEstados] = useState<any>([]);
  const [sugestaoMunicipios, setSugestaoMunicipios] = useState<any>([]);
  const [filterMunicipios, setFilterMunicipios] = useState<any>([]);
  const [searchValues, setSearchValues] = useState<any>([]);
  const [searchValuesState, setSearchValuesState] = useState<any>([]);

  interface DataFormats {
    nome: string;
    cpf: string;
    municipio: string;
    dataNascimento: string;
    visitMunicipio: any;
    visitEstado: any;
  }

  useEffect(() => {
    api.get('/states').then(response => {
      setSiglasEstados(response.data.data);
    });
  }, []);

  function handleSubmit(data: DataFormats): void {
    data.visitMunicipio = searchValues;
    data.visitEstado = searchValuesState;

    console.log(data);
  }

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

  const addSearchVisitMunicipios = (e: any) => {
    e.preventDefault();
    if (visitMunicipios.length < 1)
      setVisitMunicipios([...visitMunicipios, '']);
  };

  const removeSearchVisitMunicipios = (e: any) => {
    e.preventDefault();

    document
      .getElementById('placeHolderEstado')
      ?.setAttribute('disabled', 'false');

    setVisitMunicipios(visitMunicipios.splice(1, visitMunicipios.length));
    setSugestaoMunicipios([]);
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
        <h1>Cadastro de Paciente</h1>
        <FormContent>
          <div>
            <Input name="nome" icon={FiUser} placeholder="Nome"></Input>
            <Input name="cpf" icon={FiEdit3} placeholder="CPF"></Input>
          </div>
          <div>
            <Input
              name="municipio"
              icon={FiMap}
              placeholder="Município"
            ></Input>
            <Input
              name="dataNascimento"
              icon={FiBookmark}
              placeholder="Data de Nascimento"
            ></Input>
          </div>
          <div>
            <select id="select-sexo">
              <option disabled selected>
                Sexo
              </option>
              <option>Masculino</option>
              <option>Feminino</option>
            </select>
            <select id="select-raca">
              <option disabled selected>
                Raça
              </option>
              <option>Branco</option>
              <option>Negro</option>
              <option>Amarelo</option>
              <option>Pardo</option>
            </select>
          </div>

          {/* <EstadosVisitados>
            <h1>Estados Visitados:</h1>
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
                        -
                      </Button>
                    </div>
                  </>
                );
              })}
          </EstadosVisitados> */}
          {/* <EstadosContainer>
            <h2>Visitou outro município?</h2>
            <Button type="button" onClick={addSearchVisitMunicipios}>
              +
            </Button>
            <Button type="button" onClick={removeSearchVisitMunicipios}>
              -
            </Button>
          </EstadosContainer> */}
          {/* <VisitMunicipiosDiv>
            {visitMunicipios.map((municipio: any) => (
              <>
                <div>
                  <select id="select-estado" onChange={disabledPlaceHolder}>
                    <option id="placeHolderEstado">Estado</option>
                    {siglasEstados &&
                      siglasEstados.map((estado: any) => (
                        <option key={estado.id}>{estado.initials}</option>
                      ))}
                  </select>
                  <Input
                    id="municipioPesquisa"
                    key={municipio}
                    onChange={autoComplete}
                    name="visitMunicipio"
                    icon={FiMapPin}
                    placeholder="Pesquisar município"
                  ></Input>
                </div>
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
              </>
            ))}
          </VisitMunicipiosDiv> */}
          <Button type="submit">Cadastrar</Button>
        </FormContent>
      </Form>
      <a href="/search">
        <FiArrowLeft />
        Voltar
      </a>
    </Container>
  );
};

export default Registration;
