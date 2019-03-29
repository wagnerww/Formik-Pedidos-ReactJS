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
      usuperfil: 0
    },
    perfis: [],
    uf: []
  }

  /* START */
  async componentDidMount() {
    const { id } = this.props.match.params;
    try {
      if (id != 0) {
        const { data } = await api.get(`/usuarios/${id}`);
        this.setState({ mode: 'UPD', data })
      } else {
        this.setState({ mode: 'INS' })
      }
      const perfis = await api.get('/perfis');
      this.setState({ perfis: perfis.data });
      const uf = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/');
      console.log('uf', uf.data)
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

  render() {
    const { handleChangeData } = this;
    const { usuname, ususenha, usuperfil } = this.state.data

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
        <input type="submit" value="Submit" />
      </Form>
    </div>);
  }
}
