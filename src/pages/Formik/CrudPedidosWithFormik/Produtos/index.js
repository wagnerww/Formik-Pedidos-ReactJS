import React, { Component, Fragment } from "react";
import { FieldArray } from "formik";

import Input from "../../../../Components/Input";

import DetailsProd from "./DetailsProd";

import Modal from "react-modal";

// import { Container } from './styles';
Modal.setAppElement("#root");

class Produtos extends Component {
  state = { isDetlhesOpen: false };

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
    const { values, handleChange, produtos, setFieldValue } = this.props;
    return (
      <FieldArray
        name="produtos"
        render={arrayProdutos => (
          <Fragment>
            <table className="">
              <thead>
                <tr>
                  <td>id</td>
                  <td>descricao</td>
                  <td>Quantidade</td>
                  <td>Valor</td>
                  <td>Total</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {values.produtos && values.produtos.length > 0
                  ? values.produtos.map((prod, index) => {
                      const baseProd = `produtos.${index}`;
                      return (
                        <tr key={index}>
                          <td>
                            <Input
                              type="number"
                              placeholder="id"
                              name={`${baseProd}.id`}
                              value={prod.id}
                              onChange={handleChange}
                            />
                          </td>
                          <td>
                            <Input
                              type="text"
                              placeholder="descricao"
                              name={`${baseProd}.descricao`}
                              value={prod.descricao}
                              onChange={handleChange}
                            />
                          </td>
                          <td>
                            <Input
                              type="text"
                              placeholder="quantidade"
                              name={`${baseProd}.qtd`}
                              value={prod.qtd}
                              onChange={e => this.Subtotal(index, e)}
                            />
                          </td>
                          <td>
                            <Input
                              type="number"
                              placeholder="valor"
                              name={`${baseProd}.valor`}
                              value={prod.valor}
                              onChange={e => this.Subtotal(index, e)}
                            />
                          </td>
                          <td>
                            <Input
                              type="number"
                              placeholder="total"
                              name={`${baseProd}.total`}
                              value={prod.total}
                              onChange={handleChange}
                            />
                          </td>
                          <td>
                            <span
                              onClick={e =>
                                this.setState({ isDetlhesOpen: true })
                              }
                            >
                              Detalhes
                            </span>
                            <Modal isOpen={this.state.isDetlhesOpen}>
                              <span
                                onClick={e =>
                                  this.setState({ isDetlhesOpen: false })
                                }
                              >
                                X
                              </span>
                              <DetailsProd
                                baseProd={baseProd}
                                prod={prod}
                                setFieldValue={setFieldValue}
                              />
                            </Modal>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
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
