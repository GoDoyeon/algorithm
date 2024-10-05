// [입력값]
// 6
// (())())
// (((()())()
// (()())((()))
// ((()()(()))(((())))()
// ()()()()(()()())()
// (()((())()(

const fs = require('fs');

let [N, ...input] = fs.readFileSync('./input.txt').toString().split('\n');
let n = parseInt(N);
// console.log(input);
for (let i = 0; i < n; i++) {
  let result = 'YES';
  let value = input[i];
  let stack = [];
  for (let j = 0; j < value.length; j++) {
    if (value[j] === '(') {
      stack.push(value[j]);
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
