// [230212] 올바른 괄호

function solution(s) {
  let array = [];

  for (let i of s) {
    if (i === '(') {
      array.push(i);
    }
    if (i === ')') {
      if (array[array.length - 1] === '(') {
        array.pop();
      } else {
        return false;
      }
    }
  }

  return array.lengyh === 0 ? true : false;
}

// const s = '(()))()';

const s = '(())()';

console.log(solution(s));

// 삼항 연산자 사용
function solution2(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === '(' ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}
