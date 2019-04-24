import React, { Component, Fragment } from "react";
import { Form, withFormik, FieldArray, Formik } from "formik";
import produtos from "../../Data/produtos";
import * as Yup from "yup";

import PedProdutos from "./Produtos";
import Input from "../../Components/Input";

import { Debug } from "../../Components/services/Debug";

const pedidosForm = ({
  errors,
  handleChange,
  values,
  touched,
  setFieldValue
}) => (
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
    {!!errors.cliente && touched.cliente && <span>{errors.cliente}</span>}
    <label htmlFor="">Cliente</label>
    <Input
      type="text"
      placeholder="Cliente"
      name="cliente"
      onChange={handleChange}
      value={values.cliente}
      isValid={!!errors.cliente && touched.cliente}
    />
    {!!errors.endereco && touched.endereco && <span>{errors.endereco}</span>}
    <label htmlFor="">Endereco</label>
    <Input
      type="text"
      placeholder="Endereceço"
      name="endereco"
      onChange={handleChange}
      value={values.endereco}
      isValid={!!errors.endereco && touched.endereco}
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

export default withFormik({
  mapPropsToValues: props => {
    console.log("campos", props.data.cliente);
    const campos = props.data;
    return {
      id: campos.id || 0,
      cliente: campos.cliente,
      endereco: campos.endereco,
      produtos: campos.produtos,
      total: campos.total
    };
  },
  validateOnBlur: false,
  validateOnChange: false,

  validationSchema: Yup.object().shape({
    id: Yup.number().required("Id obrigatório"),
    cliente: Yup.string().required("Cliente obrigatorio"),
    endereco: Yup.string().required("Endereço é obrigatório")
  }),

  handleSubmit: values => {
    console.log("valor", values);
    //chamada a api
  }
})(pedidosForm);
