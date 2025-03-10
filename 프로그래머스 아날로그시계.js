
let h1 = 0
let m1 = 5
let s1 = 30
let h2 = 0
let m2 = 7
let s2 = 0

function solution(h1, m1, s1, h2, m2, s2) {
    const getCount = (h, m, s) => {
      let [mCount, hCount] = [0, 0];
  
      mCount += h * 59;
      hCount += h * 60;
  
      let result = 0;
  
      mCount += m;
      hCount += m;
      result -= 1;
  
      const curMDegree = m * 6;
      const curHDegree = 30 * (h % 12) + 0.5 * m;
      const condition1 = curMDegree <= 5.9 * s;
      const condition2 = curHDegree <= (6 - 1 / 120) * s;
  
      if (condition1) mCount += 1;
      if (condition2) hCount += 1;
  
      if (h >= 12) {
        hCount -= 1;
        result -= 1;
      }
  
      result += mCount + hCount;
  
      return console.log(result);
    };
  
    let result = getCount(h2, m2, s2) - getCount(h1, m1, s1);
    if (s1 === 0 && m1 === 0) result += 1;
  
    return console.log(result);
    
  }
  