// 19

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('./input.txt').toString().trim();
let number = parseInt(input);

function solution(number) {
  let result = 0;
  while (number > 0) {
    if (number % 5 === 0) {
      number -= 5;
    } else {
      number -= 3;
    }
    result++;
  }
  return number === 0 ? result : -1;
}

console.log(solution(number));
