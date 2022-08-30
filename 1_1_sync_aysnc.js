// callback hell

const colors = require('colors');

console.log('hello world!');

setTimeout(() => {
    // console.log('... ... ...'.red);
    const user = { id: 1 };

    setTimeout(() => {
        const products = [{}, {}, {}];

        setTimeout(() => {
            const prices = [{}, {}, {}];
        }, 1000);
    }, 1000);
}, 1000);

console.log('good bye!'.blue);
