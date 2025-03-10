import _ from 'lodash';

// 



let m = 4
let section = [2,3,6,10,15,18]
let sector = section[0]+m-1
let count = 0;
let data = false

section.map((e, idx2) => {
    sector > e ? data=true : count+=1, data=false;
    data ? sector = e+m : data=false
    e == section[section.length-1] ? count+=1 :''
})

section.map((e, idx) => {
    let a = section[idx+1] ? section[idx+1] : section[idx];
    if (idx == 0 && e+m-1 > section[1]) {
        sector = e
        console.log(count)
    } else if (idx == 0 && e+m-1 <= section[1]) {
        count += 1
        sector = section[1]
        console.log(count)
    } else if (sector+m-1 < a) {
        count +=1
        sector = a
    } else if (a == section[idx]) {
        count+=1
    }
});
count == 0 ? count = 1 : count

console.log(count);
const c = 'a';
const d = { 
    'a' : 1,
    'b' : 2
}[c] || 3;