const number = [1, 2, 3];

// map을 사용하여 콘솔창 확인하기
let result = number.map((n) => {
  console.log(n);
  return n;
});
// 콘솔에는 1, 2, 3이 찍힘
console.log(number); // [1, 2, 3]
console.log(result); // [1, 2, 3]
console.log(number === result); // false

// map 을 사용하여 number에 +1 해주기
result = number.map((n) => {
  return n + 1;
});
console.log(number); // [1, 2, 3]
console.log(result); // [2, 3, 4]

// map을 사용하여 홀수, 짝수 구분하기
result = number.map((n) => {
  if (n % 2) {
    return '홀수';
  }
  return '짝수';
});
console.log(number); // [1, 2, 3]
console.log(result); // [ '홀수', '짝수', '홀수' ]
