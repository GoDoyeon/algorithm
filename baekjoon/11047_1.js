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
const [firstLine, ...input] = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n');
let [n, k] = firstLine.split(' ').map(Number);

const coins = input.map(Number).reverse();

let result = 0;
for (let coin of coins) {
  if (k >= coin) {
    result += Math.floor(k / coin);
    k %= coin;
  }
}
console.log(`coin: ${result}`);
