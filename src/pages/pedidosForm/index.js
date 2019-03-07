import React, { Component, Fragment } from "react";
import { withFormik, FieldArray } from "formik";
import * as Yup from "yup";

import InputValidator from "../../commun/elements/inputValidator";

// import styles from './styles';

const produtos = {
  id: 0,
  descricao: "",
  qtd: 0,
  valor: 0,
  total: 0
};

class pedidosForm extends Component {
  Subtotal = async (i, e) => {
    const { handleChange } = this.props;
    await handleChange(e);
    const { setFieldValue, values } = this.props;
    const { produtos } = values;
    console.log("prod", produtos);
    const qtd = produtos[i].qtd;
    const total = qtd * 10;
    await setFieldValue(`produtos[${i}].total`, total);
    //onst produto = values.produtos[index];
  };

  render() {
    const { handleSubmit, errors, handleChange, values, touched } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        {!!errors.id && touched.id && <span>{errors.id}</span>}
        <label htmlFor="">id</label>
        <InputValidator
          type="text"
          placeholder="id"
          name="id"
          handleChange={handleChange}
          value={values.id}
          isValid={!!errors.id}
        />
        {!!errors.cliente && touched.cliente && <span>{errors.cliente}</span>}
        <label htmlFor="">Cliente</label>
        <InputValidator
          type="text"
          placeholder="Cliente"
          name="cliente"
          handleChange={handleChange}
          value={values.cliente}
          isValid={!!errors.cliente && touched.cliente}
        />
        {!!errors.endereco && touched.endereco && (
          <span>{errors.endereco}</span>
        )}
        <label htmlFor="">Endereco</label>
        <InputValidator
          type="text"
          placeholder="Endereceço"
          name="endereco"
          handleChange={handleChange}
          value={values.endereco}
          isValid={!!errors.endereco && touched.endereco}
        />
        <FieldArray
          name="produtos"
          render={({ push }) => (
            <Fragment>
              <div className="table tableCol5">
                <div className="tableCell">id</div>
                <div className="tableCell">descricao</div>
                <div className="tableCell">Quantidade</div>
                <div className="tableCell">Valor</div>
                <div className="tableCell">Total</div>

                {values.produtos.map((prod, index) => (
                  <div key={index} className="table tableCol5">
                    <div className="tableCell">
                      <InputValidator
                        type="number"
                        placeholder="id"
                        name={`produtos[${index}].id`}
                        value={prod.id}
                        handleChange={handleChange}
                      />
                    </div>
                    <div className="tableCell">
                      <InputValidator
                        type="text"
                        placeholder="descricao"
                        name={`produtos[${index}].descricao`}
                        value={prod.descricao}
                        handleChange={handleChange}
                      />
                    </div>
                    <div className="tableCell">
                      <InputValidator
                        type="text"
                        placeholder="quantidade"
                        name={`produtos[${index}].qtd`}
                        value={prod.qtd}
                        handleChange={e => this.Subtotal(index, e)}
                      />
                    </div>
                    <div className="tableCell">
                      <InputValidator
                        type="number"
                        placeholder="valor"
                        name={`produtos[${index}].valor`}
                        value={prod.valor}
                        handleChange={handleChange}
                      />
                    </div>
                    <div className="tableCell">
                      <InputValidator
                        type="text"
                        placeholder="total"
                        name={`produtos[${index}].total`}
                        value={prod.total}
                        handleChange={handleChange}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button type="button" onClick={async () => await push(produtos)}>
                Add
              </button>
            </Fragment>
          )}
        />

        <button type="submit">Enviar</button>
      </form>
    );
  }
}
export default withFormik({
  mapPropsToValues: () => ({
    id: 0,
    cliente: "",
    endereco: "",
    produtos: [produtos]
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
