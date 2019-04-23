import React, { Component, Fragment } from "react";
import { Form, Field, FieldArray, Formik } from "formik";
import Modal from "react-modal";

import InputForm from "../../Components/InputForm";
import { Container } from "./styles";

Modal.setAppElement(document.getElementById("root"));

export default class FormDinamico extends Component {
  state = {
    isPopupProdOpen: false,
    data: {
      nome: ""
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ data: { ...this.state.data, [name]: value } });
  };

  handleSubmit = e => {};

  handlePopupProd = () => {
    const isPopupProdOpen = this.state.isPopupProdOpen ? false : true;
    this.setState({ isPopupProdOpen });
  };

  render() {
    const { isPopupProdOpen, data } = this.state;
    const { handlePopupProd, handleChange, handleSubmit } = this;
    return (
      <Container>
        <Formik onSubmit={handleSubmit}>
          <Fragment>
            <Field name="nome" value={data.nome} />
            <a onClick={handlePopupProd}>Abrir</a>
            <Modal isOpen={isPopupProdOpen}>
              <h1 onClick={handlePopupProd}>Form Dinamico</h1>
            </Modal>
            <input type="submit" value="Submit" />
          </Fragment>
        </Formik>
        *
      </Container>
    );
  }
}
