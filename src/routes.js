import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import pedidosForm from "./pages/pedidosForm";
import pedidosConsulta from "./pages/pedidosConsulta";

// import { Container } from './styles';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/consulta" component={pedidosConsulta} />
      <Route path="/pedido/create" component={pedidosForm} />
      <Route path="/pedido/edit/:id" component={pedidosForm} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
