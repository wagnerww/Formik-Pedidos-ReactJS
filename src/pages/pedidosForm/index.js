import React, { Component, Fragment } from "react";
import { withFormik, FieldArray } from "formik";
import * as Yup from "yup";

import InputValidator from "../../commun/elements/inputValidator";
import { push_uniq } from "terser";

// import styles from './styles';

class pedidosForm extends Component {
  render() {
    const { handleSubmit, errors, handleChange, values } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        {!!errors.id && <span>{errors.id}</span>}
        <label htmlFor="">id</label>
        <InputValidator
          type="text"
          placeholder="id"
          name="id"
          handleChange={handleChange}
          value={values.id}
          isValid={!!errors.id}
        />
        {!!errors.cliente && <span>{errors.cliente}</span>}
        <label htmlFor="">Cliente</label>
        <InputValidator
          type="text"
          placeholder="Cliente"
          name="cliente"
          handleChange={handleChange}
          value={values.cliente}
          isValid={!!errors.cliente}
        />
        {!!errors.endereco && <span>{errors.endereco}</span>}
        <label htmlFor="">Endereco</label>
        <InputValidator
          type="text"
          placeholder="Endereceço"
          name="endereco"
          handleChange={handleChange}
          value={values.endereco}
          isValid={!!errors.endereco}
        />
        <this.Produtos produtos={values.produtos} handleChange={handleChange} />

        <button type="submit">Enviar</button>
      </form>
    );
  }

  Produtos = ({ produtos, handleChange }) => {
    // console.log("obj", obj);
    //const { produtos } = obj.obj;
    console.log("prod", produtos);
    return (
      <FieldArray
        name="produtos"
        render={({ push }) => (
          <Fragment>
            <table>
              <thead>
                <tr>
                  <td>id</td>
                  <td>descricao</td>
                  <td>Quantidade</td>
                </tr>
              </thead>
              <tbody>
                {produtos.map((prod, index) => (
                  <tr key={index}>
                    <td>
                      <InputValidator
                        type="number"
                        placeholder="id"
                        name={`produtos[${index}].id`}
                        value={prod.id}
                        handleChange={handleChange}
                      />
                    </td>
                    <td>
                      <InputValidator
                        type="text"
                        placeholder="descricao"
                        name={`produtos[${index}].descricao`}
                        value={prod.descricao}
                        handleChange={handleChange}
                      />
                    </td>
                    <td>
                      <InputValidator
                        type="text"
                        placeholder="quantidade"
                        name={`produtos[${index}].qtd`}
                        value={prod.qtd}
                        handleChange={handleChange}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={async () => await push({})}>
              Add
            </button>
          </Fragment>
        )}
      />
    );
  };
}
export default withFormik({
  mapPropsToValues: () => ({
    id: 0,
    cliente: "",
    endereco: "",
    produtos: [
      {
        id: 0,
        descricao: "",
        qtd: 0
      }
    ]
  }),

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
