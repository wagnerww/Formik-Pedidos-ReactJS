import React from "react";

// import { Container } from './styles';

const element = ({ type, name, placeholder, handleChange, value, isValid }) => (
  <input
    className={isValid ? "inputValidator" : null}
    type={type}
    placeholder={placeholder}
    name={name}
    onChange={handleChange}
    value={value}
  />
);

export default element;
