// [입력값]
// 5
// 20 10 35 30 7

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const [n, input] = fs.readFileSync('./input.txt').toString().trim().split('\n');
const inputArr = input.trim().split(' ');

let min = parseInt(inputArr[0]);
let max = parseInt(inputArr[0]);
for (let i = 0; i < n; i++) {
  let number = parseInt(inputArr[i]);
  min = number < min ? number : min;
  max = number > max ? number : max;
}
console.log(`${min} ${max}`);
