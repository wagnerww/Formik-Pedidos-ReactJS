import React, { Component } from "react";
import { withFormik, Form } from "formik";

import { Container } from "./styles";

class DynamicForm extends Component {

  state = {
    mode: 'ins'
  }

  handleChange_test = async (e) => {
    const {
      setFieldValue
    } = this.props;
    const { name, value } = e.target;
    await setFieldValue([name], value)
    /*await setFieldValue("completo", value)*/

  }

  render() {
    const { handleChange_test } = this;
    const { values, handleChange, setFieldValue } = this.props;
    const { nome, sobrenome, tech } = values;
    return (
      <Container>
        <Form>
          <input
            name="nome"
            placeholder="Seu nome"
            value={nome}
            onChange={handleChange}
          />
          <input
            name="sobrenome"
            type="text"
            onChange={handleChange}
            value={sobrenome}
          />
          <input
            type="text"
            onChange={value => setFieldValue("tech", value.target.value)}
            value={tech}
          />

          <button type="submit">Enviar</button>
        </Form>
      </Container>
    );
  }
}

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => ({
    nome: 'Wagner',
    sobrenome: ''
  }),

  handleSubmit: values => {
    console.log("Formulario", values);
  }
})(DynamicForm)
