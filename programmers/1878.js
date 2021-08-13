// [210813] 직사각형 좌표 구하기

function solution() {
  const v = [
    [1, 4],
    [3, 4],
    [3, 10],
  ];
  var answer = [];

  answer[0] = v[0][0] ^ v[1][0] ^ v[2][0];
  answer[1] = v[0][1] ^ v[1][1] ^ v[2][1];

  return answer;
}
console.log(solution());
