import React, { Component } from 'react';
import { Form } from 'react-advanced-form';
import Input  from './Input/Input.js';
import validationRules from '../../validation/rules';
import validationMessages from '../../validation/messages';
import './TableForm.scss'

class TableForm extends Component {

    handleButtonClick = () => {
        this.form.validate().then((isFormValid) => {
            if (isFormValid) {
                this.props.addToState(this.form.serialize());
                this.form.reset()
            } else {
                alert('Form is not valid!')
            }
        })
    }

  render() {
    return (
        <section className='formSection'>
            <Form 
                className='formSection__form'
                ref={form => this.form = form} 
                rules={validationRules} 
                messages={validationMessages}
            >
                <Input
                    key='1'
                    className='formSection__input'
                    name="firstName"
                    placeholder="First name"
                    required 
                />
                <Input
                    key='2'
                    className='formSection__input'
                    name="lastName"
                    placeholder="Last name"
                    required 
                />
                <Input
                    key='3'
                    className='formSection__input'
                    name="telephone"
                    placeholder="Telephone"
                    type='tel'
                    required 
                />
                <Input
                    key='4'
                    className='formSection__input'
                    name="age"
                    placeholder="Age"
                    type="number"
                    required 
                />
            </Form>
            <button className='formSection__button' onClick={this.handleButtonClick}>Submit</button>
        </section>
    )
  }
};

export default TableForm;