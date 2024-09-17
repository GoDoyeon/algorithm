// [입력값]
// 3
// 50 80 60

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const count = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

let result = 0;
let sum = 0;
const max = Math.max(...numbers);

numbers.map((number) => {
  sum += (number / max) * 100;
});
result = sum / count;

console.log(result);
