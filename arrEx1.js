

const arr = ['타노스', '아이언맨', '블랙위도우']

console.log(arr.length)

// 맨 마지막에 추가
let newLength = arr.push('블랙팬서')

console.log(arr)
console.log(newLength) // 총 배열길이

//console.log(arr.indexOf("캡틴아메리카")) // 배열 내부 항목 인덱스찾기

arr.splice(1,1)  // 항목 제거

console.log(arr)

for (let i = 0; i < arr.length; i++) {
    // if(arr[i] === '블랙위도우'){
    //     break
    // }
    if(arr[i] === '블랙위도우'){
        continue
    }
    console.log(i)
    console.log(arr[i])

    // if(arr[i] === '블랙위도우'){
    //     break
    // }
}

console.log('--------------')