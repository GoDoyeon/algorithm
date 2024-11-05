const food = [1, 3, 4, 6];

function solution(food) {
  const result = [];
  for (let i = 1; i < food.length; i++) {
    const num = parseInt(food[i] / 2);
    result.push(...Array(num).fill(i));
  }
  const result2 = [...result].reverse();
  result.push(0);
  result.push(...result2);
  return result.join('');
}

// repeat() 사용
function solution(food) {
  let res = '';
  for (let i = 1; i < food.length; i++) {
    res += i.toString().repeat(parseInt(food[i] / 2));
  }
  return res + '0' + [...res].reverse().join('');
}

console.log(solution(food));
