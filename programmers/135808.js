// const k = 3;
// const m = 4;
// const score = [1, 2, 3, 1, 2, 3, 1];
const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

function solution(k, m, score) {
  let result = 0;
  score.sort((a, b) => b - a);
  for (let i = 0; i <= score.length - m; i += m) {
    result += score[i + m - 1] * m;
  }

  return result;
}
console.log(solution(k, m, score));
