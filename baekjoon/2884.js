// [입력값]
// 10 10
// 0 30
// 23 40

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('./input.txt').toString().trim().split(' ');

let h = parseInt(input[0]);
let m = parseInt(input[1]);

if (m - 45 < 0) {
  m = m + 60 - 45;
  h -= 1;
} else {
  m = m - 45;
}

if (h < 0) {
  h = h + 24;
}
console.log(h, m);
