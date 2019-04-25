import React, { Component } from "react";
import { Form, withFormik } from "formik";
import * as Yup from "yup";

import Input from "../../../../../Components/Input";
import { Debug } from "../../../../../Components/services/Debug";

// import { Container } from './styles';

const Campos = {
  id: 0,
  descricao: "",
  valor: 0
};

class DetailsProd extends Component {
  render() {
    const { handleChange, values, handleSubmit } = this.props;
    return (
      <Form>
        <Input name="id" onChange={handleChange} value={values.id} />
        <Input
          name="descricao"
          onChange={handleChange}
          value={values.descricao}
        />
        <Input name="valor" onChange={handleChange} value={values.valor} />
        <button type="button" onClick={handleSubmit}>
          Salvar
        </button>
        <Debug />
      </Form>
    );
  }
}

export default withFormik({
  mapPropsToValues: props => {
    console.log("props", props);
    return {
      ...Campos,
      descricao: props.prod.descricao
    };
  },

  validateOnBlur: false,
  validateOnChange: false,

  validationSchema: Yup.object().shape({
    id: Yup.number().required("Id obrigatório"),
    descricao: Yup.string().required("Descricao obrigatorio"),
    valor: Yup.number().required("Valor é obrigatório")
  }),

  handleSubmit: (Values, FormikBag) => {
    console.log("FormikBag", FormikBag.props);
    console.log("desc", Values.descricao);

    const { baseProd, setFieldValue } = FormikBag.props;
    setFieldValue(`${baseProd}.descricao`, Values.descricao);

    //chamada a api
  }
})(DetailsProd);
