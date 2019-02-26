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

export default validationRules;