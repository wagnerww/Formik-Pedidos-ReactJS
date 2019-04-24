import React, { Component } from "react";
import { Form, Formik } from "formik";

import PedProdutos from "./Produtos";
import Input from "../../Components/Input";
import { Debug } from "../../Components/services/Debug";

import produtos from "../../Data/produtos";
// import { Container } from './styles';

export default class CrudPedidos extends Component {
  state = {
    id: 0,
    cliente: "",
    endereco: "",
    produtos: [produtos],
    total: 0
  };

  async componentDidMount() {
    this.setState({ cliente: "ricardo" });
  }

  render() {
    const data = this.state;
    return (
      <Formik
        initialValues={data}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          console.log("valor", values);
        }}
        render={propsForm => {
          const {
            handleChange,
            values,
            errors,
            touched,
            setFieldValue
          } = propsForm;
          return (
            <Form>
              {!!errors.id && touched.id && <span>{errors.id}</span>}
              <label htmlFor="">id</label>
              <Input
                type="text"
                placeholder="id"
                name="id"
                onChange={handleChange}
                value={values.id}
                isValid={!!errors.id}
              />
              <Input
                type="text"
                placeholder="cliente"
                name="cliente"
                onChange={handleChange}
                value={values.cliente}
              />
              <Input
                type="text"
                placeholder="Endereceço"
                name="endereco"
                onChange={handleChange}
                value={values.endereco}
              />
              <PedProdutos
                values={values}
                handleChange={handleChange}
                produtos={produtos}
                setFieldValue={setFieldValue}
              />

              <Input
                type="text"
                placeholder="total"
                name="total"
                onChange={handleChange}
                value={values.total}
              />
              <button type="submit">Enviar</button>
              <Debug />
            </Form>
          );
        }}
      />
    );
  }
}
