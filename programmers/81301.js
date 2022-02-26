// [220204] 숫자 문자열과 영단어

// "one4seveneight"	1478
// "23four5six7"	234567
// "2three45sixseven"	234567
// "123"	123

function solution(s) {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    console.log('arr : ', arr);
    answer = arr.join(i);
    console.log('answer : ', answer);
  }
  return Number(answer);
}
let s = 'one4seveneight';
console.log(solution(s));
