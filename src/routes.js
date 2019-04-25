import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// ---- REACT FORMS
import ReactSimpleForm from "./pages/ReactForm/SimpleForm";

// ---- FORMIK
import CrudPedidosWithFormik from "./pages/Formik/CrudPedidosWithFormik";
import FormikArray from "./pages/Formik/FomikArray";
import WithForm from "./pages/Formik/WithForm";

// import { Container } from './styles';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/*---- REACT FORM ----*/}
      <Route path="/react/simpleform" component={ReactSimpleForm} />

      {/*---- FORMIK ----*/}
      <Route
        path="/formik/pedidowformik/create"
        component={CrudPedidosWithFormik}
      />
      <Route
        path="/formik/pedidowformik/edit/:id"
        component={CrudPedidosWithFormik}
      />

      <Route path="/formik/formikarray" component={FormikArray} />
      <Route path="/formik/withform" component={WithForm} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
