const name = ['may', 'kein', 'kain', 'radi'];
const yearning = [5, 10, 1, 3];
const photo = [
  ['may', 'kein', 'kain', 'radi'],
  ['may', 'kein', 'brin', 'deny'],
  ['kon', 'kain', 'may', 'coni'],
];

// 이중 for문
function solution(name, yearning, photo) {
  var answer = [];
  let scoreMap = new Map();

  name.forEach((val, idx) => {
    scoreMap.set(val, yearning[idx]);
  });

  photo.forEach((personList) => {
    let photoScore = 0;
    personList.forEach((person) => {
      photoScore += scoreMap.get(person) || 0;
    });
    answer.push(photoScore);
  });
  return answer;
}

// reduce 사용
function solution(name, yearning, photo) {
  const memory = {};
  for (let i = 0; i < name.length; i++) {
    memory[name[i]] = yearning[i];
  }
  return photo.map((arr) =>
    arr.reduce((acc, cur) => acc + (memory[cur] || 0), 0),
  );
}

console.log(solution(name, yearning, photo));
