// [210811] K번째 수

function solution(array, commands) {
  var array = [1, 5, 2, 6, 3, 7, 4];
  var commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
    [4, 7, 3],
  ];
  var answer = []; // 해당 연산을 적용했을 때 나온 결과를 담을 배열

  console.log(`commands의 길이 : ${commands.length}`); // commands의 길이

  // i=4
  // commands[0][0]부터 commands[4][3]까지의 값을 출력해주면
  // 2 5 3 4 4 1 1 7 3 4 7 3 이 출력 되는 것을 알 수 있다.
  for (var n = 0; n < commands.length; n++) {
    var i = commands[n][0];
    var j = commands[n][1];
    var k = commands[n][2];

    console.log(`${n + 1}번째 i : ${i}, j : ${j}, k : ${k}`);

    var result = [];
    // 1. 1번쨰 숫자부터 j번째 숫자까지 result 배열에 넣어줍니다.
    while (i <= j) {
      result.push(array[i - 1]);
      i++;
    }
    // 2. 추출한 result 배열을 정렬합니다.
    result = result.sort(function (a, b) {
      return a - b;
    });
    console.log(`정렬된 result : ${result}`);

    // 3. k번째에 있는 수를 anwser 배열에 넣어줍니다.
    answer.push(result[k - 1]);
  }
  console.log(`answer: ${answer}`);

  return answer;
}

solution();

// 제출 코드

function solution1(array, commands) {
  var array = [1, 5, 2, 6, 3, 7, 4];
  var commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
    [4, 7, 3],
  ];
  var answer = [];
  for (var n = 0; n < commands.length; n++) {
    var i = commands[n][0];
    var j = commands[n][1];
    var k = commands[n][2];

    var result = [];
    while (i <= j) {
      result.push(array[i - 1]);
      i++;
    }
    result = result.sort(function (a, b) {
      return a - b;
    });
    answer.push(result[k - 1]);
  }
  return answer;
}

solution1();
