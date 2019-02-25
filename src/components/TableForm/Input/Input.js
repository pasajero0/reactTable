import React from 'react';
import { createField, fieldPresets } from 'react-advanced-form';
import './Input.scss';

const Input = (props) => {
  
  const { fieldProps, fieldState } = props
  const { touched, errors } = fieldState
  
  return (
    <div className="input">
      <input className="input__field" {...fieldProps} />
      <div className="input__message">
        {touched && errors && errors.map((error) => (
          <p className="input__text">{error}</p>
        ))}
      </div>
    </div>
  )
};

export default createField(fieldPresets.input)(Input);