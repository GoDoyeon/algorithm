// [210727] 로또의 최고 순위와 최저 순위

// 테스트 케이스
// var lottos = [44, 1, 0, 0, 31, 25];
// var win_nums = [31, 10, 45, 1, 6, 19];
// var lottos = [0, 0, 0, 0, 0, 0];
// var win_nums = [38, 19, 20, 40, 15, 25];
// var lottos = [45, 4, 35, 20, 3, 9];
// var win_nums = [20, 9, 3, 45, 4, 35];
var lottos = [44, 1, 2, 3, 32, 25];
var win_nums = [31, 10, 45, 33, 6, 19];

function solution(lottos, win_nums) {
  // 1. lottos 오름차순 정렬
  var lottosSort = lottos.sort(function (a, b) {
    return a - b;
  });
  // 2. win_nums 오름차순 정렬
  var win_numsSort = win_nums.sort(function (a, b) {
    return a - b;
  });
  // 3. 오름차순 정렬한 두 파라미터를 비교하여 동일한 값의 개수를 찾아냄
  var sameNum = lottosSort.filter((x) => win_numsSort.includes(x));
  // 4. lottos에서 0의 개수를 찾아냄
  var unknownNum = 0;
  for (i = 0; i < 6; i++) {
    if (lottosSort[i] == 0) {
      unknownNum += 1;
    } else {
    }
  }
  var minNum = 0; // 당첨된 개수(최저)
  var maxNum = 0; // 당첨된 개수(최고)

  minNum = sameNum.length;
  maxNum = sameNum.length + unknownNum;
  console.log(maxNum);
  var maxRank; // 최고 순위
  var minRank; // 최저 순위
  if (maxNum == 0) {
    maxRank = 6;
  } else {
    maxRank = 7 - maxNum > 7 ? 1 : 7 - maxNum;
  }
  if (minNum == 0) {
    minRank = 6;
  } else {
    minRank = 7 - minNum >= 6 ? 6 : 7 - minNum;
  }
  var answer = [maxRank, minRank];
  console.log(answer);
  return answer;
}
console.log(solution(lottos, win_nums));
