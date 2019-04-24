import React, { Component, Fragment } from "react";
import { Form, withFormik, FieldArray, Formik } from "formik";
import produtos from "../../../Data/produtos";
import * as Yup from "yup";

import PedProdutos from "./Produtos";
import Input from "../../../Components/Input";

import { Debug } from "../../../Components/services/Debug";

const Campos = {
  id: 0,
  cliente: "wagner r wagner",
  endereco: "",
  produtos: [produtos],
  total: 0
}

class LoadForm extends Component {
  async componentDidMount() {
    const { setValues } = this.props;
    Campos.cliente = "wagner"
    await setValues(
      Campos
    )
  }

  render() {
    const { errors,
      handleChange,
      values,
      touched,
      setFieldValue } = this.props;
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
    )
  }
}

export default withFormik({
  mapPropsToValues: props => (
    Campos
  ),

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
})(LoadForm);
