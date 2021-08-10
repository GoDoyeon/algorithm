const number = [1, 2, 3];

// 1. reduce를 사용하여 number 배열 안의 값을 다 더하기
result = number.reduce((acc, cur, i) => {
  // acc : 누적값, cur : 현재값 , i : 인덱스
  console.log(acc, cur, i);
  return acc + cur;
}, 0);
// 0 1 0
// 1 2 1
// 3 3 2
console.log(result); // 6

// 2. reduceRight를 사용하여 number 배열 안의 값을 다 더하기
result = number.reduceRight((acc, cur, i) => {
  // acc : 누적값, cur : 현재값 , i : 인덱스
  console.log(acc, cur, i);
  return acc + cur;
}, 0);
// 0 3 2
// 3 2 1
// 5 1 0
console.log(result); // 6

// 3. reduce를 사용하여 홀수, 짝수 구분하기
result = number.reduce((acc, cur) => {
  acc.push(cur % 2 ? '홀수' : '짝수');
  return acc;
}, []);
console.log(result); // [ '홀수', '짝수', '홀수' ]

// 4. reduce를 사용하여 홀수만 필터링하기
result = number.reduce((acc, cur) => {
  if (cur % 2) acc.push(cur);
  return acc;
}, []);
console.log(result); // [ 1, 3 ]

// 5. reduce로 비동기 프로그래밍하기
const promiseFactory = (time) => {
  return new Promise((resolve, reject) => {
    console.log(time);
    setTimeout(resolve, time);
  });
};
[1000, 2000, 3000, 4000].reduce((acc, cur) => {
  return acc.then(() => promiseFactory(cur));
}, Promise.resolve());
// 1000 (바로)
// 2000 (1초 후)
// 3000 (2초 후)
// 4000 (3초 후)
