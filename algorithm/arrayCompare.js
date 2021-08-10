//두 배열 비교하기
const arr1 = ['1', '2', '3', '4', '5'];
const arr2 = ['1', '2', '5', '6', '7'];

// 비교하기
console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // false

// 교집합 비교
console.log(arr1.filter((x) => arr2.includes(x))); // ['1', '2', '5']

// 차집합 비교
console.log(arr1.filter((x) => !arr2.includes(x))); // ['3', '4']
