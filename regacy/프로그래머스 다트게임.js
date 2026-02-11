let dartResult = "1S2D*3T";
let answer = 0;
let answer2 = 0;
dartResult = dartResult.split('');
console.log(dartResult);

dartResult.forEach((e, idx) => {
    if (e == "S") {
        dartResult[idx] = "^1";
    } else if (e == "D") {
        dartResult[idx] = "^2";
    } else if (e == "T") {
        dartResult[idx] = "^3";
    }
});
console.log(dartResult);


dartResult.forEach((e, idx) => {
    if (e.includes("^")) {
        if (dartResult[2] == "*") {
            answer += Number(dartResult[2])*2;
        } else if (dartResult[2] == "#") {
            answer += Number(dartResult[2])*-2;
        } else if (dartResult[idx+1] == "*") {
            answer += Number(dartResult[idx])*2
            answer2 += Number(e[idx-1])*2
        } else if (dartResult[idx+1] == "#") {
            answer += Number(dartResult[idx])*-2
            answer2 += Number(e[idx-1])*-2
        }
        
    }
})


// for (let i=0; i < dartResult.length; i++) {
//     if (dartResult[1] == "S") {
//         parseInt(dartResult[0])
//         }
// }