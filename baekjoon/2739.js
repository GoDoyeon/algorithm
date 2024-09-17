// [입력값]
// 5

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('./input.txt').toString().trim();

for (let i = 1; i < 10; i++) {
  console.log(input, '*', i, '=', input * i);
}
