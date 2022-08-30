// console.log(module)

// module.exports.errorHandler = function errorHandler(error) {
//     const { name, message, stack } = error;
//     console.log(name);
//     console.log(message);
// }

export function errorHandler(error) {
    const { name, message, stack } = error;
    console.log(name);
    console.log(message);
}

// module.exports.func2 = function func2() {
//     console.log('func2');
// }

export function func2() {
    console.log('func2');
}

// module.exports = errorHandler;

// module.exports.errorHandler = errorHandler;
// module.exports.func2 = func2;

// module.exports = {
//     errorHandler,
//     func2,
// };

// export default func2;

// const obj = {};

// obj.property1 = "";
// obj.property2 = "";


  // "type": "module",
