// 5
// 3 1 4 3 2

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")

/* 내가 처음 푼 코드 
const [n, input] = fs.readFileSync('./input.txt').toString().trim().split('\n');

const times = input
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let result = 0;
for (let i = 0; i < n; i++) {
  let j = 0;
  while (j <= i) {
    result += times[j++];
  }
}
console.log(result);
*/

const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const n = Number(input[0]);
const times = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let result = 0;
let sum = 0;

for (let i = 0; i < n; i++) {
  sum += times[i]; // 현재 사람까지의 인출 시간 누적
  result += sum; // 지금까지의 누적 시간을 결과에 더함
}

console.log(result);
