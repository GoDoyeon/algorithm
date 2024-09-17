// [입력값]
// 1 2
const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().trim().split(' ');

// const inputA = parseInt(input[0]);
// const inputB = parseInt(input[1]);

// console.log(inputA + inputB);

// 풀이
function solution(arr) {
  const [a, b] = arr[0].split(' ');
  return Number(a) + Number(b);
}

console.log(solution(input));
