import React from "react";
import { Field } from "formik";

// import { Container } from './styles';

const InputForm = ({ name, isValid, ...Options }) => (
  <input
    id={name}
    name={name}
    className={isValid ? "inputValidator" : null}
    {...Options}
  />
);

export default InputForm;
