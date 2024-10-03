// 10 4200
// 1
// 5
// 10
// 50
// 100
// 500
// 1000
// 5000
// 10000
// 50000

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const [n, ...input] = fs.readFileSync('./input.txt').toString().split('\n');
let price = n.trim().split(' ').pop();

input.sort((a, b) => b - a);
let result = 0;
for (let i = 0; i < input.length; i++) {
  if (price / input[i] >= 1) {
    result += Math.floor(price / input[i]);
    price = price % input[i];
  }
}
console.log(result);
