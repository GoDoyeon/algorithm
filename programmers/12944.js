// [220312] 평균 구하기

function solution(arr) {
  return (
    arr.reduce((a, b) => {
      return a + b;
    }) / arr.length
  );
}

let arr = [1, 2, 3, 4];
console.log(solution(arr));
