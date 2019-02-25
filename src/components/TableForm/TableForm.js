import React, { Component } from 'react';
import { Form } from 'react-advanced-form';
import Input  from './Input/Input.js';
import './TableForm.scss'
// import validationRules from '../../validation/rules';

const validationRules = {
    extend: true,
    type: {
        number: ({ value }) => /\d{1,2}/g.test(value),
        tel: ({ value }) => value.length < 14,
    }, 
    name: {
        firstName:  ({ value }) => /^(([A-za-zА-яа-я]+[\s]{1}[A-za-zА-яа-я]+)|([A-Za-zА-Яа-я]+))$/gim.test(value),
        lastName: ({ value }) => /^(([A-za-zА-яа-я]+[\s]{1}[A-za-zА-яа-я]+)|([A-Za-zА-Яа-я]+))$/gim.test(value),
        telephone: ({ value }) => /\+\d{1,2}\s?\d{3}\s?\d{3}\s?\d{4}/g.test(value),
        age: ({ value }) => value.length < 3,
    }
};

const validationMessages = {
    type: {
        tel: {
            invalid: 'telephone is to long',
        },
        number: {
            invalid: 'number is invalid',
        }
    },
    name: {
        firstName: {
            invalid: 'Cyrillic or Latin letters only!',
        },
        lastName: {
            invalid: 'Cyrillic or Latin letters only!',
        },
        age: {
            invalid: 'max 2 symbols'
        },
        telephone: {
            invalid: 'In the format +380998887766'
        }
    },
};


class TableForm extends Component {

    handleButtonClick = () => {
        this.form.validate().then((isFormValid) => {
            if (isFormValid) {
                this.props.addToState(this.form.serialize());
                // this.saveToLocalStorage(this.form.serialize())
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