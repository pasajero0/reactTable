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

export default validationMessages;