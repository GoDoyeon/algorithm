// [220226] 부족한 금액 계산하기

function solution(price, money, count) {
  let answer = -1;

  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i;
    console.log(
      i,
      '번째(i) 탔을 경우 내야 하는 총 금액(total) : ',
      total,
      ', 놀이기구 이용료(price) : ',
      price * i,
    );
  }

  if (total <= money) answer = 0;
  else answer = (money - total) * -1;

  return answer;
}

let price = 3;
let money = 20;
let count = 4;
console.log(solution(price, money, count));
