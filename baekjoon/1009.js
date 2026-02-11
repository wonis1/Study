const input = require('fs').readFileSync('testCase.txt', 'utf8').trim();

let value = input.split('\n');
value.shift();

for (let i = 0; i < value.length; i++) {
    let num = value[i].split(' ');
    let bag = [];
    for (let n = 1; n <= 4; n++) {
        let bottom = (num[0]**n) % 10 == 0 ? 10 : (num[0]**n) % 10;
        bag.push(bottom);
    }
    let correct = num[1] % 4;
    bag.unshift(bag[3]);
    bag.pop();
    console.log(bag[correct]);
}



// 5
// 1 6
// 3 7
// 6 2
// 7 100
// 9 635