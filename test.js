
const readLine = require('readline-sync')

console.log(Math.PI)

const num = Math.pow(2,4)

console.log(num)

// 주어진 데이터
const r1 = 10, r2 = 20

// 원의 넓이
const area1 = Math.pow(r1,2) * Math.PI, area2 = Math.pow(r2, 2) * Math.PI
console.log(area1, area2)

// 최종 넓이
let gap = area1 - area2

// if 삼항연산자
if(gap < 0){
    gap *= -1
}

gap = gap < 0 ? gap * -1 : gap

gap = gap.toFixed(2)

console.log(`이 도형의 넓이는 ${gap} 입니다`)
