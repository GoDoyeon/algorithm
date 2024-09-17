// [입력값]
// 5

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('./input.txt').toString().trim();

let result = '';
for (let i = 0; i < input; i++) {
  result += '*';
  console.log(result);
}
