import React, { Component, Fragment } from "react";
import { Form, withFormik, FieldArray, Formik } from "formik";
import produtos from "../../commun/produtos";
import * as Yup from "yup";

import InputValidator from "../../commun/elements/inputValidator";
import PedProdutos from "./Produtos";
import InputForm from "../../Components/InputForm";

import { Debug } from "../../Components/services/Debug";

class pedidosForm extends Component {
  render() {
    const {
      handleSubmit,
      errors,
      handleChange,
      values,
      touched,
      setFieldValue
    } = this.props;

    return (
      <Form>
        {!!errors.id && touched.id && <span>{errors.id}</span>}
        <label htmlFor="">id</label>
        <InputForm
          type="text"
          placeholder="id"
          name="id"
          onChange={handleChange}
          value={values.id}
          isValid={!!errors.id}
        />
        {!!errors.cliente && touched.cliente && <span>{errors.cliente}</span>}
        <label htmlFor="">Cliente</label>
        <InputForm
          type="text"
          placeholder="Cliente"
          name="cliente"
          onChange={handleChange}
          value={values.cliente}
          isValid={!!errors.cliente && touched.cliente}
        />
        {!!errors.endereco && touched.endereco && (
          <span>{errors.endereco}</span>
        )}
        <label htmlFor="">Endereco</label>
        <InputForm
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

<<<<<<< HEAD
                {values.produtos && values.produtos.length > 0 ? (values.produtos.map((prod, index) => (
                  <div key={index} className="table tableCol5">
                    <div className="tableCell">
                      <Field
                        type="number"
                        placeholder="id"
                        name={`produtos.${index}.id`}
                        value={prod.id}
                      /*onChange={handleChange}*/
                      />
                    </div>
                    <div className="tableCell">
                      <InputValidator
                        type="text"
                        placeholder="descricao"
                        name={`produtos.${index}.descricao`}
                        value={prod.descricao}
                      /*  handleChange={handleChange}*/
                      />
                    </div>
                    <div className="tableCell">
                      <InputValidator
                        type="text"
                        placeholder="quantidade"
                        name={`produtos.${index}.qtd`}
                        value={prod.qtd}
                      /* handleChange={e => this.Subtotal(index, e)}*/
                      />
                    </div>
                    <div className="tableCell">
                      <InputValidator
                        type="number"
                        placeholder="valor"
                        name={`produtos.${index}.valor`}
                        value={prod.valor}
                      /* handleChange={e => this.Subtotal(index, e)}*/
                      />
                    </div>
                    <div className="tableCell">
                      <InputValidator
                        type="text"
                        placeholder="total"
                        name={`produtos.${index}.total`}
                        value={prod.total}
                      /* handleChange={handleChange}*/
                      />
                    </div>
                  </div>
                ))) : (null)}
              </div>
              <button type="button" onClick={async () => await arrayProdutos.push('')}>
                Add
              </button>
            </Fragment>
          )}
=======
        <InputForm
          type="text"
          placeholder="total"
          name="total"
          value={values.total}
>>>>>>> 2be0df7613ba6a19ad7070a9cb08cca285def31a
        />

        <button type="submit">Enviar</button>
        <Debug />
      </Form>
    );
  }
}
export default withFormik({
  mapPropsToValues: props => ({
    id: 0,
    cliente: "",
    endereco: "",
<<<<<<< HEAD
    /* produtos: [produtos]*/
=======
    produtos: [produtos],
    total: 0
>>>>>>> 2be0df7613ba6a19ad7070a9cb08cca285def31a
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
