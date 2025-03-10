import _ from 'lodash';

let board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
let moves = [1,3,5]

// [0,0,0,0,0]
// [0,0,1,0,3]
// [0,2,5,0,1]        
// [4,2,4,4,2]
// [3,5,1,3,1]         [1,5,3,5,1,2,1,4]




let bounce = 0;
let arr = []

for (let i=0; i<board.length; i++){
    let temp = []
    for (let j=0; j<board.length; j++){
        temp.push(board[j][i])
    }
    arr.push(temp)
}

console.log(JSON.stringify(arr))

let arr2 = []
arr.map((e, idx) => {
    let arr22 = []
    e.map((l) => {
        if (l != 0) {
            arr22.push(l)
        }
    })
    arr2.push(arr22)
})

console.log(JSON.stringify(arr2))

let arr3 = []
moves.map((e) => {
    arr2.map((l,ind) => {
        l.map((m,index) => {
            if (e == ind+1 && ){
                arr3.push(m)
                l.pop(m)
                console.log(JSON.stringify(arr3))
            } else if (arr3[arr3.length-1] == l) {
                // arr3.pop(arr3[arr3.length-1])
                // console.log(bounce += 1)
            }
        })
    })
})


console.log(JSON.stringify(bounce))