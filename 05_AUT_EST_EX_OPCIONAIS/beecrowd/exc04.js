var input = require('fs').readFileSync('stdin', 'utf8');
var [R] = input.split('\n');

var n = 3.14159;
var a = n * R**2;
console.log('A=' + a.toFixed(4))