// const cards1 = ['i', 'drink', 'water'];
// const cards2 = ['want', 'to'];
// const goal = ['i', 'want', 'to', 'drink', 'water'];

const cards1 = ['i', 'water', 'drink'];
const cards2 = ['want', 'to'];
const goal = ['i', 'want', 'to', 'drink', 'water'];

function solution(cards1, cards2, goal) {
  var answer = 'true';
  for (let i = 0; i < goal.length; i++) {
    const card = goal[i];

    if (card === cards1[0]) {
      cards1.shift();
    } else if (card === cards2[0]) {
      cards2.shift();
    } else {
      return 'false';
    }
  }
  return answer;
}
console.log(solution(cards1, cards2, goal));
