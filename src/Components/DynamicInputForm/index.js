import React from 'react';

// import { Container } from './styles';

const DynamicInputForm = ({ field: { onChange, ...field },
  form: { touched, errors, setFieldValue },
  label,
  useNumberComponent = false,
  ...props }) => <input
    {...field}
    {...props}
    onChange={
      useNumberComponent
        ? (newValue) => setFieldValue(field.name, newValue)
        : onChange
    }
  />;

export default DynamicInputForm;
