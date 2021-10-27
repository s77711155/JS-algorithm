function solution(num, arr) {
    let max = 0;
    let result = 0
    for (let i=0; i<=arr.length-1; i++){
        let addNum = 0
        for (let n of String(arr[i])) {
            addNum += parseInt(n)
        }
        /*
        *
        * */
        if (addNum > max){
            max =  addNum;
            result = arr[i]
        }else if (addNum === max) {
            max = result > arr[i] ? max : addNum;
            result = result > arr[i] ? result : arr[i]
        }
    }
    Number.MIN_SAFE_INTEGER
    return result
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

// 쌤 풀이
//while () 써서 나머지 나온 값으로 더하면 그값
//  for (let n of String(arr[i])) {
//             addNum += parseInt(n)
//         }
// 해당 코드를 reduce로 줄일수 잇음
