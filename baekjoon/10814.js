// 3
// 21 Junkyu
// 21 Dohyun
// 20 Sunyoung

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")

/* 내가 처음 푼 코드 
const [n, ...inputs] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

let array = [];
inputs.forEach((input) => {
  let object = new Object();
  let value = input.split(' ');
  object.age = Number(value[0]);
  object.name = value[1];
  array.push(object);
});
array = array.sort((a, b) => a.age - b.age);

array.forEach((value) => {
  console.log(value.age.toString() + ' ' + value.name);
});
*/

/* [풀이 1] sort(): split 메서드로 나이와 이름이 구분되어있는 공백을 기준으로 나눠주고 나이로 비교해준다.

const [n, ...input] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');
console.log(input);

input.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]);
console.log(input.join('\n'));

*/

const [n, ...input] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');
input.sort((a, b) => parseInt(a) - parseInt(b));
console.log(input.join('\n'));
