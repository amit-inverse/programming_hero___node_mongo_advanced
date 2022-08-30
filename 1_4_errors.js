// const errorHandler = require('./1_5_errorHandler');
// const {errorHandler, func2} = require('./1_5_errorHandler');
// import func2 from './1_5_errorHandler.js'
import { errorHandler } from './1_5_errorHandler.js';

// func2();

async function getData() {
    try {
        // undefined.find();

        const emailError = new Error('Email already exists!');
        throw emailError;
    } catch (error) {
        // console.log(error);
        errorHandler(error);
    }
}

getData();

// function errorHandler(error) {
//     // console.log(error)
//     const { name, message, stack } = error;
//     console.log(name)
//     console.log(message)
//     // console.log(stack);

//     // logger.error({
//     //     name,
//     //     message,
//     //     stack,
//     // });

//     // console.log('Internal server error!');
// }

console.log('done!');
