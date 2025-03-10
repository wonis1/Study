let friends =  ["a", "b", "c"]
let gifts = ["a b", "b a", "c a", "a c", "a c", "c a"]

// gifts.sort();
// console.log(gifts)

// let arr = Array.from({length : friends.length}, () => Array.from({length:friends.length}).fill(0))

// console.log(JSON.stringify(arr))

// let gift = {};
// gift.map()


// // gifts.map(e => gift.push(e.split(' ')))
// console.log(JSON.stringify(gift))

function getTable( gifts ) {
    return gifts.reduce( ( table, gift ) => {
        const [ give, receive ] = gift.split(' ');
    
        if (!table.exchange[give]) {
            table.exchange[give] = {};
        }
        if (!table.point[give]) {
            table.point[give] = 0;
        }
        if (!table.point[receive]) {
            table.point[receive] = 0;
        }
    
        table.point[give] += 1;
        table.point[receive] -= 1;
    
        if (!table.exchange[give][receive]) {
            table.exchange[give][receive] = 1;
        }
        else {
            table.exchange[give][receive] += 1;
        }

        console.log(gift);

        console.log(
            JSON.stringify(table)
        );
    
        return table;
    }, {
        exchange: {},
        point: {}
    });
}

function fillZero( friends ) {
    return friends.reduce( (r, c) => {
        if (!r[c]) {
            r[c] = 0;
        }
    
        return r;
    }, {});
}

function max(arr) {
    return arr.reduce( (max, cur) => {
        if (cur > max) {
            return cur;
        } 

        return max;
    }, arr[0] );
}




const table = getTable(gifts);



const result = fillZero(friends);

for (let i = 0; i < friends.length - 1; i++) {
    const left = friends[i];

    for (let j = i + 1; j < friends.length; j++) {
        const right = friends[j];

        const leftgp = table.exchange?.[left]?.[right] || 0;
        const rightgp = table.exchange?.[right]?.[left] || 0;
        const leftpp = table.point?.[left] || 0;
        const rightpp = table.point?.[right] || 0;

        if (leftgp > rightgp) {
            result[left] += 1;
        }
        else if (rightgp > leftgp) {
            result[right] += 1;
        }
        else {
            if (leftpp > rightpp) {
                result[left] += 1;
            }
            else if (rightpp > leftpp) {
                result[right] += 1;
            }
        }

        //console.log(`${left}(${leftgp})(${leftpp}) ${right}(${rightgp})(${rightpp})`);
    }
}

const answer = max(Object.values(result));
//console.log(answer);