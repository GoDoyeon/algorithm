// 10

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim();
let n = parseInt(input);

function makeOne(n) {
  const dp = Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
    }
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
    }
  }

  return dp[n];
}
console.log(makeOne(n));
