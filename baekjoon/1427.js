// 2143

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('');

input.sort((a, b) => parseInt(b) - parseInt(a));
console.log(input.join(''));
