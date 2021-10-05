import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AutoComplete } from 'primereact/autocomplete';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Form } from '@unform/web';
import {
  FiUser,
  FiEdit3,
  FiMap,
  FiBookmark,
  FiArrowLeft,
} from 'react-icons/fi';

import { Container, FormContent } from './styled';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

const Registration: React.FC = () => {
  const [sexo, setSexo] = useState('');
  const [raca, setRaca] = useState<number>();
  const [municipio, setMunicipio] = useState<number>();
  const [dt_nasc, setDt_nasc] = useState<string>();
  const [municipios, setMunicipios] = useState<any>();
  const [municipiosFiltrados, setMunicipiosFiltrados] = useState<any>();
  const [municipiosSelecionado, setMunicipiosSelecionado] = useState<any>();

  const history = useHistory();

  interface DataFormats {
    name: string;
    cpf: string;
    residenceUfId: number;
    residenceMunId: number;
    dt_nasc: string;
    sex: string;
    cs_raca: number;
  }

  useEffect(() => {
    api.get(`/municipios/${35}`).then(response => {
      const newResult = [];
      const dataResponse = response.data.data;
      for (let i = 0; i < dataResponse.length; i += 1) {
        newResult.push(dataResponse[i].name);
      }

      setMunicipios(newResult);
    });
  }, []);

  const searchCountry = (e: any) => {
    console.log(e);

    const newFilterMunicipios = municipios.filter((valor: any) => {
      const valorMinusculo = valor.toLowerCase();
      const municipioMinusculo = e.query.toLowerCase();

      return valorMinusculo.includes(municipioMinusculo);
    });

    setMunicipiosFiltrados(newFilterMunicipios);
    console.log(municipiosFiltrados);
  };

  function handleSubmit(data: DataFormats): void {
    data.residenceUfId = 35;
    data.sex = sexo;
    if (dt_nasc)
      data.dt_nasc = new Date(dt_nasc)
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ');
    if (municipio) data.residenceMunId = municipio;
    if (raca) data.cs_raca = raca;

    api.post('/patient', data).then(response => {
      console.log('response', response);
      history.push('/information', data);
    });

    console.log(data);
  }

  const changeSexo = useCallback(() => {
    setSexo((document.getElementById('selectSexo') as HTMLInputElement).value);
  }, []);

  const changeRaca = useCallback(() => {
    setRaca(
      Number((document.getElementById('selectRaca') as HTMLInputElement).value),
    );
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Cadastro de Paciente</h1>
        <FormContent>
          <div>
            <Input name="name" placeholder="Nome"></Input>
            <Input name="cpf" placeholder="CPF"></Input>
          </div>
          <div>
            <AutoComplete
              id="autocomplete"
              value={municipiosSelecionado}
              suggestions={municipiosFiltrados}
              completeMethod={searchCountry}
              name="residenceMunId"
              onChange={e => setMunicipiosSelecionado(e.value)}
              placeholder="Municipio"
            />
            <Input
              name="dt_nasc"
              placeholder="Data de Nascimento"
              onChange={e => setDt_nasc(e.target.value)}
            ></Input>
          </div>
          <div>
            <select id="selectSexo" onChange={changeSexo}>
              <option disabled selected>
                Sexo
              </option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
            <select id="selectRaca" onChange={changeRaca}>
              <option disabled selected>
                Raça
              </option>
              <option value={1}>Branco</option>
              <option value={2}>Negro</option>
              <option value={3}>Amarelo</option>
              <option value={4}>Pardo</option>
            </select>
          </div>
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
