// [입력값]
// 14
// push 1
// push 2
// top
// size
// empty
// pop
// pop
// pop
// size
// empty
// pop
// push 3
// empty
// top

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let stack = [];
for (let i = 1; i < input.length; i++) {
  let result;
  let value = input[i];

  if (value.includes('push')) {
    const arr = value.split(' ');
    value = arr[1];
  }
  switch (value) {
    case 'pop':
      result = stack.length > 0 ? stack.pop() : '-1';
      console.log(result);
      break;
    case 'size':
      result = stack.length;
      console.log(result);
      break;
    case 'empty':
      result = stack.length > 0 ? 0 : 1;
      console.log(result);
      break;
    case 'top':
      result = stack.length > 0 ? stack[stack.length - 1] : -1;
      console.log(result);
      break;
    default:
      stack.push(value);
      break;
  }
}
