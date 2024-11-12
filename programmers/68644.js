// const numbers = [2, 1, 3, 4, 1];
//	[2,3,4,5,6,7]
const numbers = [5, 0, 2, 7];
//	[2,5,7,9,12]

function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }
  const answer = [...new Set(result)];
  return answer.sort((a, b) => a - b);
}
console.log(solution(numbers));
