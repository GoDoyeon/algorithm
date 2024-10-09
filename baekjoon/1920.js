// 5
// 4 1 5 2 3
// 5
// 1 3 7 9 5

const fs = require('fs');
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")

/* Set 객체에 있는 has 메서드를 사용
let input = fs.readFileSync('./input.txt').toString().split('\n');
const [n, a, m, b] = input.map((v) => v.split(' '));

const array = new Set(a);
const result = b.map((v) => (array.has(v) ? 1 : 0));
console.log(result.join('\n'));

*/

// 이분 탐색 - 재귀함수 사용
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [N, A, M, B] = input.map((v) => v.split(' ').map((x) => Number(x)));

A.sort((a, b) => a - b);

const binarySearch = (list, target, left, right, mid) => {
  mid = Math.floor((left + right) / 2);

  if (right < left) {
    return list[mid] == target ? 1 : 0;
  }

  if (list[mid] > target) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }

  return binarySearch(list, target, left, right, mid);
};

const result = B.map((v) => binarySearch(A, v, 0, A.length - 1, 0));

console.log(result.join('\n'));
