// 배열 정렬하기

// Sample 1 ) 오름차순 정렬
const arr1 = [2, 1, 3];
const arr2 = ['banana', 'apple', 'orange'];

arr1.sort();
console.log(arr1); // 1, 2, 3

arr2.sort();
console.log(arr2); // apple,banana,orange

// Sample 2) 유니코드 순서에 따른 정렬
const arr3 = [2, 1, 3, 10];
arr3.sort();
console.log(arr3); // 1, 10, 2, 3

// Sample 3) 숫자 오름차순 정렬 (파라미터 활용)
arr3.sort(function (a, b) {
  if (a > b) {
    return 1; // a > b 이면 1을 리턴
  } else if (a < b) {
    return -1; //  a < b 이면 -1을 리턴
  } else {
    return 0; // a == b 이면 0을 리턴
  }
});
console.log(arr3); // 1, 2, 3, 10

// Sample 4) 숫자 오름차순 정렬하기 (sort() 함수 사용)
arr3.sort(function (a, b) {
  return a - b;
});
console.log(arr3); // 1, 2, 3, 10

// Sample 5) 숫자 내림차순 정렬하기
arr3.sort(function (a, b) {
  return b - a;
});
console.log(arr3); // 10, 3, 2, 1
