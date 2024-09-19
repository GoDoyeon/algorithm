// [입력값]
// 18

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
let input = fs.readFileSync('./input.txt');

let number = Number(input);

function solution(number) {
  let answer = 0;

  while (number > 0) {
    if (number % 5 === 0) {
      number -= 5;
    } else {
      number -= 3;
    }
    answer += 1;
  }
  return number === 0 ? answer : -1;
}
console.log(solution(number));
