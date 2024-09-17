// [입력값]
// 6
// (())())
// (((()())()
// (()())((()))
// ((()()(()))(((())))()
// ()()()()(()()())()
// (()((())()(

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const [n, ...input] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < n; i++) {
  let result = 'YES';
  let str = input[i];
  let strLength = str.length;
  let stack = [];
  for (let j = 0; j < strLength; j++) {
    if (str[j] === '(') {
      stack.push(str[j]);
    } else {
      if (!stack.pop()) {
        result = 'NO';
        break;
      }
    }
  }
  if (stack.length !== 0) {
    result = 'NO';
  }
  console.log(result);
}
