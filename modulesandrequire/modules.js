/** Without object destructuring */
// const xyz = require('./people');
// console.log(xyz);

/** With object destructuring */
const {
    peoples,
    ages
} = require('./people');
console.log(peoples, ages);

/** Built in node libraries */
const os = require('os');
console.log(os.platform(), os.homedir());