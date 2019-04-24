import React, { Component } from 'react';

// import { Container } from './styles';

export default class Detalhes extends Component {
  render() {
    const { prod, handleChange, index } = this.props;
    return <input name={`produtos.${index}.descricao`} onChange={handleChange} value={prod.descricao} />;
  }
}
