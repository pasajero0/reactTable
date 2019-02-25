import React from 'react';
import RenderForm from '../RenderForm/RenderForm.js';
import RenderField from '../RenderField/RenderField.js';
  
const TableForm = () => {

  const onSubmit = (event) => {
    event.preventDefault();
    let newObj = {}
    const fieldsArr = [...event.currentTarget.children[0].childNodes];
    fieldsArr.map(val => {
      const {name, value} = val.children[0];
      newObj[name] = value;
    });
    event.currentTarget.reset();

    console.log('> ', newObj)
  }


  return (
    <RenderForm 
      onSubmit={onSubmit}
    >

      <RenderField placeholder="First Name" name="firstName" />
      <RenderField placeholder="Last Name" name="lastName" />
      <RenderField placeholder="Phone" name="phone"  type="tel"/>
      <RenderField placeholder="Age" name="age"  type="number"/>

    </RenderForm>
  );
};

// TableForm.propTypes = {
//   // onSubmit: PropTypes.func.isRequired
// };

TableForm.defaultProps = {
  error: ''
};

export default TableForm;