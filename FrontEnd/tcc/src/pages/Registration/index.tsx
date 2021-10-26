import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AutoComplete } from 'primereact/autocomplete';

import InputMask from 'react-input-mask';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Form } from '@unform/web';
import { FiArrowLeft, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

import { Container, FormContent, LogOut } from './styled';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

const Registration: React.FC = () => {
  const [sexo, setSexo] = useState('');
  const [raca, setRaca] = useState<number>();
  const [cpf, setCpf] = useState('');
  const [dt_nasc, setDt_nasc] = useState<string>();
  const [municipios, setMunicipios] = useState<any>();
  const [municipiosResponse, setMunicipiosResponse] = useState<any>();
  const [municipiosFiltrados, setMunicipiosFiltrados] = useState<any>();
  const [municipiosSelecionado, setMunicipiosSelecionado] = useState<any>();
  const [municipioSelecionadoId, setMunicipioSelecionadoId] = useState<any>();
  const { name, user_type, logOut } = useAuth();

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
    if (
      user_type === undefined ||
      Number(user_type) === 1 ||
      user_type === null
    ) {
      history.push('/');
    }

    api.get(`/municipios/${35}`).then(response => {
      const newResult = [];
      const dataResponse = response.data.data;
      for (let i = 0; i < dataResponse.length; i += 1) {
        newResult.push(dataResponse[i].name);
      }

      setMunicipiosResponse(response.data.data);
      setMunicipios(newResult);
    });
  }, []);

  const setValueMunicipios = (e: any) => {
    setMunicipiosSelecionado(e);

    if (municipiosResponse) {
      const newFilterMunicipiosId = municipiosResponse.filter((valor: any) => {
        const valorMinusculo = valor.name.toLowerCase();
        const municipioMinusculo = e.toLowerCase();

        return valorMinusculo.includes(municipioMinusculo);
      });

      setMunicipioSelecionadoId(newFilterMunicipiosId[0].id);
    }
  };

  const searchCountry = (e: any) => {
    const newFilterMunicipios = municipios.filter((valor: any) => {
      const valorMinusculo = valor.toLowerCase();
      const municipioMinusculo = e.query.toLowerCase();

      return valorMinusculo.includes(municipioMinusculo);
    });

    setMunicipiosFiltrados(newFilterMunicipios);
  };

  function logOutApp(): void {
    logOut();
    history.push('/');
  }

  function handleSubmit(data: DataFormats): void {
    data.residenceUfId = 35;
    data.sex = sexo;
    data.cpf = cpf;
    if (dt_nasc)
      data.dt_nasc = new Date(dt_nasc)
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ');
    if (municipioSelecionadoId) data.residenceMunId = municipioSelecionadoId;
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
    <>
      <LogOut onClick={logOutApp}>
        <FiLogOut />
        Sair
      </LogOut>
      <Container>
        <Form onSubmit={handleSubmit}>
          <h1>Cadastro de Paciente</h1>
          <FormContent>
            <div>
              <Input name="name" placeholder="Nome"></Input>
              <InputMask
                className="inputMask"
                mask="999.999.999-99"
                name="cpf"
                placeholder="CPF"
                onChange={e => setCpf(e.target.value)}
              />
            </div>
            <div>
              <AutoComplete
                id="autocomplete"
                value={municipiosSelecionado}
                suggestions={municipiosFiltrados}
                completeMethod={searchCountry}
                name="residenceMunId"
                onChange={e => setValueMunicipios(e.value)}
                placeholder="Municipio"
              />
              <InputMask
                className="inputMask"
                mask="99/99/9999"
                name="dt_nasc"
                placeholder="Data de Nascimento"
                onChange={e => setDt_nasc(e.target.value)}
              />
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
    </>
  );
};

export default Registration;
