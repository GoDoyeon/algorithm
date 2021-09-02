// [210903] 기능개발

function solution(progresses, speeds) {
  var progresses = [93, 30, 55];
  var speeds = [1, 30, 5];

  var answer = [];
  while (speeds.length > 0) {
    // 스피드 배열을 기준으로 0이 되면 종료
    for (let i = 0; i < speeds.length; i++) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }
    let deploy_count = 0;
    while (progresses[0] >= 100) {
      // 100이 넘으면 shift, 다음 기능이 100이 되어도 shift
      progresses.shift();
      speeds.shift();
      deploy_count++;
    }
    if (deploy_count > 0) {
      // 결과 answer에 넣어주기
      answer.push(deploy_count);
    }
  }
  console.log(answer);
  return answer;
}

solution();
