const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);
let costs = input.slice(1).map(Number);
const dp = Array(k+1).fill(0);
dp[0] = 1;

for (let cost of costs) {
    for (let j = cost; j <= k; j++) {
        dp[j] += dp[j - cost];
    }
}

console.log(dp[k]);


// 3 10
// 1
// 2
// 5