// [230204 19:25] 표현 가능한 이진트리
// 19:25 문제 풀이 시작
// 19:53 힌트 봐도 모르겠음
// 20:42 풀이 봐도 모르겠음 포기

function solution(numbers) {
  let answer = [];

  // numbers를 map 돌린다.
  numbers.map((number) => {
    let nodeCnt = 1; // 현재 높이 트리의 노드 개수
    let height = 0; // 현재 트리의 높이

    // number의 노드 개수를 구한다.
    while (number.toString(2).length > nodeCnt) {
      // (현재 높이 트리의 노드 게수) = (전 높이 트리의 노드 개수) + (2 ** 현재 높이)
      nodeCnt += 2 ** ++height;
    }

    // number를 이진수로 변환 후, height 길이를 만족하는 문자열로 변경한다. (비어있는 부분은 0으로 채움)
    const number2 = number.toString(2).padStart(nodeCnt, '0');

    // 포화이진트리 조건 체크하는거 같은데 이해가 안감
    const check = (part, hasParent) => {
      let mid = parseInt(part.length / 2);

      if (part[mid] === '1') {
        if (hasParent === false) {
          isBinaryTree = false;
          return;
        }
        if (mid === 0) return;

        check(part.slice(0, mid), true);
        check(part.slice(mid + 1, part.length), true);
      }

      if (part[mid] === '0') {
        check(part.slice(0, mid), false);
        check(part.slice(mid + 1, part.length), false);
      }
    };
    let isBinaryTree = true;

    check(number2, true);
    answer.push(isBinaryTree ? 1 : 0);
  });

  return answer;
}

let numbers = [7, 42, 5];
// let numbers = [63, 111, 95];
console.log(solution(numbers));
