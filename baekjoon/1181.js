// 13
// but
// i
// wont
// hesitate
// no
// more
// no
// more
// it
// cannot
// wait
// im
// yours

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let setArr = [...new Set(input)];
setArr.shift();

let result = setArr
  .sort()
  .sort((a, b) => a.length - b.length)
  .join('\n');
