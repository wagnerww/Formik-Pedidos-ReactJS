import React, { Component, Fragment } from "react";
import { FieldArray } from "formik";
import InputValidator from "../../../commun/elements/inputValidator";

import InputForm from "../../../Components/InputForm/index";

// import { Container } from './styles';

class Produtos extends Component {
  Subtotal = async (i, e) => {
    const { handleChange } = this.props;
    await handleChange(e);
    const { setFieldValue, values } = this.props;
    const { produtos } = values;
    const qtd = produtos[i].qtd;
    const total = qtd * 10;
    console.log("values", values);
    await setFieldValue(`produtos.${i}.total`, total);
    await setFieldValue(`total`, total);
  };

  render() {
    const { values, handleChange, produtos } = this.props;
    return (
      <FieldArray
        name="produtos"
        render={arrayProdutos => (
          <Fragment>
            <div className="table tableCol5">
              <div className="tableCell">id</div>
              <div className="tableCell">descricao</div>
              <div className="tableCell">Quantidade</div>
              <div className="tableCell">Valor</div>
              <div className="tableCell">Total</div>

              {values.produtos && values.produtos.length > 0
                ? values.produtos.map((prod, index) => (
                    <div key={index} className="table tableCol5">
                      <div className="tableCell">
                        <InputForm
                          type="number"
                          placeholder="id"
                          name={`produtos.${index}.id`}
                          value={prod.id}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="tableCell">
                        <InputForm
                          type="text"
                          placeholder="descricao"
                          name={`produtos.${index}.descricao`}
                          value={prod.descricao}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="tableCell">
                        <InputForm
                          type="text"
                          placeholder="quantidade"
                          name={`produtos.${index}.qtd`}
                          value={prod.qtd}
                          onChange={e => this.Subtotal(index, e)}
                        />
                      </div>
                      <div className="tableCell">
                        <InputForm
                          type="number"
                          placeholder="valor"
                          name={`produtos.${index}.valor`}
                          value={prod.valor}
                          onChange={e => this.Subtotal(index, e)}
                        />
                      </div>
                      <div className="tableCell">
                        <InputForm
                          type="text"
                          placeholder="total"
                          name={`produtos.${index}.total`}
                          value={prod.total}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  ))
                : null}
            </div>
            <button
              type="button"
              onClick={async () => await arrayProdutos.push(produtos)}
            >
              Add
            </button>
          </Fragment>
        )}
      />
    );
  }
}

export default Produtos;
