import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RenderField.scss';

// const RenderField = ( {input, type, placeholder, meta: { touched, error } }) => {
        
//     return(
//         <div className="renderField">
//             <input className="renderField__input" {...input} placeholder={placeholder} type={type}/>
//             <p className="renderField__error">{touched && error && <span>{error}</span>}</p>
//         </div>

//     )
// }

const RenderField = ( { name, type, placeholder}) => {
        
    return(
        <div className="renderField">
            <input className="renderField__input" name={name} placeholder={placeholder} type={type}/>
            <p className="renderField__error"></p>
        </div>
    )
}

RenderField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};

RenderField.defaultProps = {
    type: 'text'
};

export default RenderField;