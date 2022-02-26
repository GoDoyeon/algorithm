// [220226] 부족한 금액 계산하기(다른 사람의 풀이)

function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}

let price = 3;
let money = 20;
let count = 4;
console.log(solution(price, money, count));
