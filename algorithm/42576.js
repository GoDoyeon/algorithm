// [210810] 완주하지 못한 선수

// 완주하지 못한 선수의 이름 return
function solution(participant, completion) {
  participant.sort(); // 참가자 배열 정렬
  completion.sort(); // 완주자 배열 선언

  for (var i = 0; i < participant.length; i++) {
    // 0부터 순차적으로 두 배열 비교
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
console.log(solution());
