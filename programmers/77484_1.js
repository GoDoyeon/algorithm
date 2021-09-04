// [210727] 로또의 최고 순위와 최저 순위

// 테스트 케이스
// var lottos = [44, 1, 0, 0, 31, 25];
// var win_nums = [31, 10, 45, 1, 6, 19];
// var lottos = [0, 0, 0, 0, 0, 0];
// var win_nums = [38, 19, 20, 40, 15, 25];
// var lottos = [45, 4, 35, 20, 3, 9];
// var win_nums = [20, 9, 3, 45, 4, 35];

function solution(lottos, win_nums) {
  var lottos = [44, 1, 2, 3, 32, 25];
  var win_nums = [31, 10, 45, 33, 6, 19];
  var answer = [];
  answer.push(7 - lottos.filter((num) => win_nums.includes(num)).length);
  answer.push(answer[0] - lottos.filter((num) => num === 0).length);
  answer = answer.reverse().map((num) => {
    if (num > 6) return 6;
    else if (num < 1) return 1;
    else return num;
  });

  console.log(answer);
  return answer;
}

solution();
