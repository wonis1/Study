let word = "EOAAE"
let a = {'A':0, "E":1, "I":2, "O":3, "U":4};
console.log(word[1]);

let number = [781, 156, 31, 6, 1];
let data = 0;

for (let i = 0; i < word.length; i++) {
    let presentData = word[i];
    let weight = a[presentData];
    data += weight*number[i] + 1;
}
return console.log(data);


// a0 = 1
// a1 = 1 + 5*1 = 6
// a2 = 6 + 5*2 = 31
// a3 = 31 + 5*3 = 156
// a4 = 156 + 5*4 = 781
