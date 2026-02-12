const input = require('fs').readFileSync('testCase.txt', 'utf8').trim().split('\n');


let [city, bus] = [Number(input[0]), Number(input[1])];
let [start, arrive] = input.pop().split(' ').map(Number);

let graph = Array.from({ length: Number(city) + 1 }, () => []);


for (let i = 2; i < input.length; i++) {
    let [from, to, cost] = input[i].split(' ').map(Number);
    graph[from].push([to, cost]);
}

console.log(graph);

let dist = Array(city + 1).fill(Infinity);
dist[start] = 0;

console.log(dist);

let pq = [[start,0]];
for (let i = 1; i < graph.length; i++) {
    let lowCost = [i, 0];
    while (graph[i].length) {
        graph[i].sort((a,b) => a[1]-b[1]);
        let [destination, cost] = graph.shift();
    }
}


// 5
// 8
// 1 2 2
// 1 3 3
// 1 4 1
// 1 5 10
// 2 4 2
// 3 4 1
// 3 5 1
// 4 5 3
// 1 5