import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import pedidosForm from "./pages/pedidosForm";
import pedidosConsulta from "./pages/pedidosConsulta";
import formik from "./pages/FomikOriginal";
import simpleForm from "./pages/SimpleForm";
import FormDinamico from "./pages/FormDinamico";

// import { Container } from './styles';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/consulta" component={pedidosConsulta} />
      <Route path="/formik" component={formik} />
      <Route path="/simpleform/:id" component={simpleForm} />
      <Route path="/pedido/create" component={pedidosForm} />
      <Route path="/pedido/edit/:id" component={pedidosForm} />
      <Route path="/dinamico" component={FormDinamico} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
