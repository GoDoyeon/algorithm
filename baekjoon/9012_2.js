// 6
// (())())
// (((()())()
// (()())((()))
// ((()()(()))(((())))()
// ()()()()(()()())()
// (()((())()(

const fs = require('fs');
const [N, ...inputs] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

let n = parseInt(N);
for (let i = 0; i < n; i++) {
  let result = 'YES';
  let stack = [];
  let input = inputs[i];
  for (let j = 0; j < input.length; j++) {
    const value = input[j];
    if (value === '(') {
      stack.push(value);
    } else {
      if (!stack.pop()) {
        result = 'NO';
        break;
      }
    }
  }
  if (stack.length > 0) {
    result = 'NO';
  }
  console.log(result);
}
