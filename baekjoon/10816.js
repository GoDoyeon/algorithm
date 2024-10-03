// [입력값]
// 10
// 6 3 2 10 10 10 -10 -10 7 3
// 8
// 10 9 -5 2 3 4 5 -10

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
let data = fs.readFileSync('./input.txt').toString().split('\n');
const N = parseInt(data[0]);
const cards = data[1].split(' ').map(Number);

const M = parseInt(data[2]);
const numbers = data[3].split(' ').map(Number);

const cardCount = new Map();

cards.forEach((card) => {
  cardCount.set(card, (cardCount.get(card) || 0) + 1);
});

const result = numbers.map((num) => cardCount.get(num) || 0);
console.log(result.join(' '));
