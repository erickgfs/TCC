import React, { useState, useCallback } from 'react';
import { Form } from '@unform/web';
import {
  FiUser,
  FiEdit3,
  FiMap,
  FiMapPin,
  FiBookmark,
  FiArrowLeft,
} from 'react-icons/fi';

import { todosMunicipios, siglasEstados } from '../../Auxiliar';

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

const Registration: React.FC = () => {
  const [visitMunicipios, setVisitMunicipios] = useState<any>([]);
  const [sugestaoMunicipios, setSugestaoMunicipios] = useState<any>([]);
  const [searchValues, setSearchValues] = useState<any>([]);

  interface DataFormats {
    nome: string;
    cpf: string;
    municipio: string;
    dataNascimento: string;
    visitMunicipio: any;
  }

  function handleSubmit(data: DataFormats): void {
    data.visitMunicipio = searchValues;

    console.log(data);
  }
  const handleSugestion = (searchValue: any) => {
    return todosMunicipios.filter(valor => {
      const valorMinusculo = valor.toLowerCase();
      const cidadeMinusculo = searchValue.toLowerCase();

      return valorMinusculo.includes(cidadeMinusculo);
    });
  };

  const disabledPlaceHolder = useCallback(() => {
    document
      .getElementById('placeHolderEstado')
      ?.setAttribute('disabled', 'true');
  }, []);

  const autoComplete = (e: any) => {
    setSugestaoMunicipios(handleSugestion(e.target.value));
  };

  const changeInput = (e: any) => {
    if (searchValues.length < 3) {
      if (!searchValues.includes(e.target.value)) {
        setSearchValues([...searchValues, e.target.value]);
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
          <EstadosVisitados>
            <h1>Estados Visitados:</h1>
            {searchValues.length > 0 &&
              searchValues.map((value: string) => {
                return (
                  <>
                    <div id="visitMunicipio">
                      {value}
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
          </EstadosVisitados>
          <EstadosContainer>
            <h2>Visitou outro município?</h2>
            <Button type="button" onClick={addSearchVisitMunicipios}>
              +
            </Button>
            <Button type="button" onClick={removeSearchVisitMunicipios}>
              -
            </Button>
          </EstadosContainer>
          <VisitMunicipiosDiv>
            {visitMunicipios.map((municipio: any) => (
              <>
                <div>
                  <select onChange={disabledPlaceHolder}>
                    <option id="placeHolderEstado">Estado</option>
                    {siglasEstados &&
                      siglasEstados.map((estado: string) => (
                        <option key={estado}>{estado}</option>
                      ))}
                  </select>
                  <Input
                    key={municipio}
                    onChange={autoComplete}
                    name="visitMunicipio"
                    icon={FiMapPin}
                    placeholder="Pesquisar município"
                  ></Input>
                </div>
                <DivButtonsSearch>
                  {sugestaoMunicipios.length < 3 &&
                    sugestaoMunicipios.map((sugestao: any) => {
                      return (
                        <button
                          type="button"
                          key={sugestao}
                          onClick={changeInput}
                          value={sugestao}
                        >
                          {sugestao}
                        </button>
                      );
                    })}
                </DivButtonsSearch>
              </>
            ))}
          </VisitMunicipiosDiv>
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
