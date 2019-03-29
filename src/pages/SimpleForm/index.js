import React, { Component } from 'react';
import { Form } from 'formik';
import axios from 'axios';

import api from '../../services/api'


// import { Container } from './styles';

export default class SimpleForm extends Component {

  state = {
    error: false,
    loading: true,
    mode: 'INS',
    data: {
      id: 0,
      usuname: '',
      ususenha: '',
      usuperfil: 0,
      usuuf: 0,
      usumunicipio: 0
    },
    perfis: [],
    ufs: [],
    municipios: []
  }

  /* START */
  async componentDidMount() {

    try {
      const { id } = this.props.match.params;
      let mode = 'INS'
      let usuarios = {};
      if (id != 0) {
        usuarios = await api.get(`/usuarios/${id}`);
        mode = 'UPD'
        this.setState({ mode, data: usuarios.data });
        //Carrega os municipios da UF
        this.handleChangeUF(this.state.data.usuuf)
      }
      //Carrega os Perfis
      const perfis = await api.get('/perfis');
      //Carrega as UF
      const uf = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/');
      this.setState({ perfis: perfis.data, ufs: uf.data });
      console.log('state', this.state)
    } catch (error) {
      console.log('error', error)
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, mode } = this.state;
      console.log('data', data)
      const response = mode === 'INS' ? await api.post(`/usuarios`, data) : await api.put(`/usuarios/${data.id}`, data)

      console.log('response', response)
    } catch (error) {
      console.log('error', error)
    }
    //Api
  }

  handleChangeData = (e) => {
    const { name, value } = e.target;
    this.setState({ data: { ...this.state.data, [name]: value } });
  }

  handleChangeUF = async (uf) => {
    const { data } = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
    this.setState({ municipios: data })
  }

  render() {
    const { handleChangeData, handleChangeUF } = this;
    const { ufs, municipios, data } = this.state;
    const { usuname, ususenha, usuperfil, usuuf, usumunicipio } = data;

    return (<div>
      <Form onSubmit={this.handleSubmit}>
        <div>
          <label>Usuario</label>
          <input value={usuname} type="text" name="usuname" onChange={handleChangeData} />
        </div>
        <div>
          <label>Senha</label>
          <input value={ususenha} type="text" name="ususenha" onChange={handleChangeData} />
        </div>
        <div>
          <label>Perfil</label>
          <select value={usuperfil} name="usuperfil" onChange={handleChangeData}>
            {this.state.perfis.map((perfil, index) => (
              <option key={index} value={perfil.id}>{perfil.descricao}</option>
            ))}
          </select>
        </div>
        <div>
          <label>UF</label>
          <select value={usuuf} name="usuuf" onChange={e => { handleChangeUF(e.target.value); handleChangeData(e) }}>
            {ufs.map((uf, index) => (
              <option key={index} value={uf.id}>{uf.sigla}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Municipio</label>
          <select value={usumunicipio} name="usumunicipio" onChange={handleChangeData}>
            {municipios.map((mun, index) => (
              <option key={index} value={mun.id}>{mun.nome}</option>
            ))}
          </select>
        </div>
        <input type="submit" value="Submit" />
      </Form>
    </div >);
  }
}
