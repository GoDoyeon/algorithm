// [230212] 다음 큰 숫자

function solution(n) {
  let origin = n.toString(2).split('1').length;

  while (true) {
    n++;
    if (n.toString(2).split('1').length === origin) return n;
  }
}

let n = 78;
console.log(solution(n));
